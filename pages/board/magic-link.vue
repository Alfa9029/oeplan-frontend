<template>
  <div class="login">
    <div class="container">
      <!-- Seção de introdução -->
      <div class="background">
        <div class="container2">
          <img
            class="android-chrome-512-x-512-1"
            src="/assets/icons/logo.svg"
            alt="Logo OEPlan"
          />
          <div class="heading-1">
            <div class="oe-plan-sistema-para-gerenciamento-de-atividades-docentes">
              OEPlan - Sistema para Gerenciamento de Atividades Docentes
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de formulário -->
      <div class="background2">
        <div class="container2">
          <div class="background-border-shadow">
            <div class="heading-3">
              <div class="login2">Login</div>
            </div>

            <form class="form" @submit.prevent="onSubmit">
              <label class="label-email" for="email">Email</label>
              <input
                id="email"
                v-model="email"
                class="input"
                type="email"
                placeholder="name@example.com"
                required
                autocomplete="username"
              />

              <button class="button2" type="submit">
                <span class="entrar">Entrar com Magic Link</span>
              </button>
            </form>

            <div v-if="linkEnviado" class="verifique-email">
              <p>Enviamos um link de acesso para <strong>{{ email }}</strong>.</p>
              <p>
                Clique no botão abaixo para simular o acesso via Magic Link.
              </p>
              <button class="button2" @click="acessarDashboard">
                <span class="entrar">Acessar Dashboard</span>
              </button>
            </div>

            <div class="ajuda">
              <span class="precisa-de-ajuda">Precisa de ajuda?</span>
              <a class="entre-em-contato" href="#">Entre em contato</a>
            </div>
            <div class="ajuda" style="margin-top: 10px;">
              <span class="precisa-de-ajuda">Não tem conta?</span>
              <NuxtLink class="entre-em-contato" to="/register">Cadastre-se</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const linkEnviado = ref(false)
const router = useRouter()

function onSubmit() {
  // Simula o envio do Magic Link
  linkEnviado.value = true
  // Em um ambiente real, aqui você chamaria o backend para enviar o e-mail
}

function acessarDashboard() {
  // Simula a autenticação e redireciona para o dashboard
  router.push('/dashboard')
}
</script>


<style scoped>
.login,
.login * {
  box-sizing: border-box;
}
.login {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;      /* Centraliza verticalmente */
  justify-content: center;  /* Centraliza horizontalmente */
  background: linear-gradient(to left, #ffffff, #ffffff),
    linear-gradient(to left, #ffffff, #ffffff);
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;      /* Centraliza verticalmente */
  justify-content: center;  /* Centraliza horizontalmente */
  width: 100vw;
  min-height: 100vh;
  position: relative;
  gap: 0px;
  align-self: stretch;
  flex-shrink: 0;
}
.background {
  background: #04060f;
  padding: 32px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  width: 960px;
  position: relative;
}
.container2 {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  max-width: 448px;
  position: relative;
}
.android-chrome-512-x-512-1 {
  flex-shrink: 0;
  width: 83px;
  height: 82px;
  position: relative;
  object-fit: cover;
  aspect-ratio: 83/82;
}
.heading-1 {
  padding: 0px 0px 8px 0px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.oe-plan-sistema-para-gerenciamento-de-atividades-docentes {
  color: #ffffff;
  text-align: center;
  font-family: "Inter-Bold", sans-serif;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  position: relative;
  width: 595px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.background2 {
  background: #0e1321;
  padding: 32px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  width: 960px;
  position: relative;
}
.background-border-shadow {
  background: #ffffff;
  border-radius: 8px;
  border-style: solid;
  border-color: #e2e8f0;
  border-width: 1px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  row-gap: 16px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  flex-shrink: 0;
  width: 448px;
  max-width: 448px;
  position: relative;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
}
.heading-3 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 398px;
  position: relative;
}
.login2 {
  color: #14343f;
  text-align: center;
  font-family: "Inter-Bold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.6px;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  flex-shrink: 0;
  width: 398px;
  height: 212px;
  position: relative;
}
.label-email,
.label-password {
  color: #020817;
  text-align: left; /* Alinha à esquerda */
  font-family: "Inter-Medium", sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  width: 100%;
  height: 14px;
  display: block;
  margin-bottom: 4px;
}
.input {
  background: #ffffff;
  border-radius: 6px;
  border-style: solid;
  border-color: #e2e8f0;
  border-width: 1px;
  height: 40px;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 13px;
  font-size: 14px;
  color: #020817;
  font-family: "Inter-Regular", sans-serif;
  box-sizing: border-box;
}
.input:focus {
  outline: 2px solid #50a3c3;
}
.container3 {
  padding: 0px 233.48px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 13px;
  bottom: 11.5px;
  top: 11.5px;
  overflow: hidden;
}
.name-example-com {
  color: #64748b;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.container4 {
  width: 372px;
  position: absolute;
  left: 13px;
  bottom: 11.5px;
  top: 11.5px;
  overflow: auto;
}
.link {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 279.41px;
  top: calc(50% - 18px);
}
.esqueceu-a-senha {
  color: #50a3c3;
  text-align: right;
  font-family: "Inter-Regular", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0; /* Garante alinhamento com o input */
}
.input2 {
  background: #ffffff;
  border-radius: 6px;
  border-style: solid;
  border-color: #e2e8f0;
  border-width: 1px;
  height: 40px;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 13px;
  font-size: 14px;
  color: #020817;
  font-family: "Inter-Regular", sans-serif;
  box-sizing: border-box;
}
.input2:focus {
  outline: 2px solid #50a3c3;
}
.container5 {
  padding: 0px 309px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 13px;
  bottom: 11.5px;
  top: 11.5px;
  overflow: hidden;
}
.div {
  color: #64748b;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.container6 {
  height: 17px;
  position: absolute;
  right: 13px;
  left: 13px;
  top: 11.5px;
  overflow: auto;
}
.button {
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 18.87%;
  position: absolute;
  right: 0px;
  bottom: 26.42%;
  top: 54.72%;
}
.svg {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}
.button2 {
  background: #14343f;
  border-radius: 6px;
  padding: 9.5px 16px 10.5px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin-top: 16px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.button2:hover {
  background: #0e1321;
}
.entrar {
  color: #ffffff;
  text-align: center;
  font-family: "Inter-Medium", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
}
.link {
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Alinha à direita */
  margin-top: -10px;         /* Aproxima do input de senha */
  margin-bottom: 10px;
  position: static;          /* Remove qualquer position absoluta */
}
.esqueceu-a-senha {
  color: #50a3c3;
  font-size: 14px;
  text-decoration: underline;
  text-align: right;
  margin-left: 0;
}
.ajuda {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alinha à esquerda */
  gap: 6px;
  margin-top: 10px;
  padding-left: 2px; /* Opcional: ajuste conforme desejar */
}
.precisa-de-ajuda {
  color: #64748b;
  font-size: 14px;
}
.entre-em-contato {
  color: #50a3c3;
  font-size: 14px;
  text-decoration: underline;
}
</style>