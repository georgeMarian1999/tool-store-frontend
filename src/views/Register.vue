<template>
  <div class="margin-60-bottom">
    <PageIntro title="register"/>
    <SignupForm :loading="loading" v-on:register="register" :form="signUpForm"/>
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import SignupForm from "@/components/login/SignupForm";
import axios from "axios";
import makeToast from "@/utils/toasts";
export default {
  name: "Register",
  components: {SignupForm, PageIntro},
  data: function() {
    return {
      signUpForm: {
        id: 0,
        username: '',
        password: '',
        email: '',
        name: '',
        role: '',
      },
      loading:  false
    }
  },
  methods: {
    register() {
      this.loading = true;
      if(this.signUpForm.username !== '' && this.signUpForm.email !== '' && this.signUpForm.name !== '' && this.signUpForm.password !== '' ) {
        const registerURL = 'http://localhost:8080/user/register';

        const registerRequest = axios.post(registerURL,this.signUpForm)

        registerRequest
            .then((response) => {
              this.loading = false;
              sessionStorage.setItem('crtUser', JSON.stringify(response.data));
              this.$router.push('/');
            })
            .catch((err) =>{
              this.loading = false;
              makeToast(this, 'danger', 'Error creating the account')
            })
      }
      }

  }
}
</script>

<style scoped>

</style>