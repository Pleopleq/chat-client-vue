<template>
  <section>
    <div>
      <h1>PleqChat</h1>
      <h3>A group chat just like the old mIRC days 💬</h3>
    </div>

    <div>
      <form @submit.prevent="logIn">
        <input type="text" placeholder="Username" v-model="username" />

        <input type="password" placeholder="Password" v-model="password" />

        <button type="submit">Login</button>
      </form>
    </div>

    <div>
      <router-link to="/register">Register</router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import UserServices from "../../services/userServices.ts";
const username = ref("");
const password = ref("");
const userServices = new UserServices();

function logIn() {
  userServices.userLogIn({ username, password });
}
</script>

<style></style>
