<template>
  <div>
    <PageIntro title="login"/>
    <LoginForm/>
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import LoginForm from "@/components/login/LoginForm";
export default {
  name: "Login",
  components: {LoginForm, PageIntro}
}
</script>

<style scoped>

</style>