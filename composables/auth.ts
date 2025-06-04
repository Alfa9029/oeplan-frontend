import type { User } from "~/shared/types/auth/user";
import type { UserLogin } from "~/shared/types/auth/user-login";
import type { UserRegister } from "~/shared/types/auth/user-register";

interface UserState {
  isLoggedIn: boolean;
  user?: User;
}

interface UserError {
  code?: number;
  message?: string;
}

const MOCK_USER: User = {
  uuid: "1",
  username: "admin",
  first_name: "Admin",
  last_name: "User",
  email: "admin@gmail.com",
  role: "admin",
};

/**
 * Auth functions interface to handle user authentication logic.
 */
export const useAuth = () => {
  const state = useState<UserState>("auth-user", () => ({ isLoggedIn: false }));
  const error = useState<UserError | null>("auth-error", () => null);

  async function login(body: UserLogin) {
    if (body.username === "admin@gmail.com" && body.password === "12345") {
      await _setState(MOCK_USER);
      return true;
    } else {
      error.value = { code: 401, message: "Usuário ou senha inválidos" };
      return false;
    }
  }

  async function register(body: UserRegister) {
    // Mock: sempre retorna sucesso
    return { ...MOCK_USER, ...body };
  }

  async function logout() {
    await _clearState();
    return true;
  }

  async function initState() {
    // Mock: não faz nada
    return;
  }

  async function getUser() {
    if (state.value.isLoggedIn) return state.value.user;
    error.value = { code: 401, message: "Não autenticado" };
    return null;
  }

  function clearError() {
    error.value = null;
  }

  async function _clearState() {
    state.value = {
      isLoggedIn: false,
      user: undefined,
    };
  }

  async function _setState(user: User) {
    state.value = {
      isLoggedIn: true,
      user,
    };
  }

  return {
    /**
     * Returns the current user state.
     *
     * This state holds the user information, such as the user's ID and role.
     * It will return `null` if no user is authenticated or the state is not set.
     */
    state: computed(() => state.value),
    /**
     * Returns the current error (not state), then call {@link clearError}.
     *
     * This contains any error message that occurred during authentication actions.
     * If no error occurred, it will return `null`.
     */
    getError: () => {
      const tmpError = error.value;
      clearError();
      return tmpError;
    },
    /**
     * Clears the current error state.
     *
     * This function is called to reset the error state after an error has been handled.
     */
    clearError,
    /**
     * Function to log the user in.
     *
     * It sends a request to the server with the provided credentials and updates the state.
     */
    login,
    /**
     * Function to register a new user.
     *
     * It sends a request to the server with user registration data and updates the state.
     */
    register,
    /**
     * Function to log the user out.
     *
     * It clears the user session and updates the state.
     */
    logout,
    /**
     * Function to get the user data.
     *
     * It fetches the user details from the server and updates the state.
     */
    getUser,
    /**
     * Function to initialize the state.
     *
     * It can be used to set up the initial user state.
     */
    initState,
  };
};
