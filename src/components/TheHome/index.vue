<template>
  <section>
    <div>
      <h1>PleqChat</h1>
      <h3>A group chat just like the old mIRC days 💬</h3>
    </div>

    <div>
      <form action="">
        <input type="text" placeholder="Username" />

        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>

    <div>
      <router-link to="/register">Register</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
