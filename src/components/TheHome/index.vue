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

<script>
import { ref } from "vue";
import UserServices from "../../services/userServices.ts";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const userServices = new UserServices();

    function logIn() {
      userServices.userLogIn({
        username: username.value,
        password: password.value,
      });
    }

    return { password, username, logIn };
  },
};
</script>

<style></style>
