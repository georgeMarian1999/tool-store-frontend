<template>
  <b-container class="login-form">
    <b-row>

      <b-col md="8">
        <b-container class="form">
          <b-form>
            <b-row>
              <b-col>
                <h4>Login into your account</h4>
              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col class="separator">

              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="username" placeholder="Username">

                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="password" type="password" placeholder="Password">

                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col md="4">

              </b-col>
              <b-col md="4">
                <div @click="login" class="rectangle-button login-button">
                  LOGIN
                </div>
              </b-col>
              <b-col md="4">

              </b-col>
            </b-row>
          </b-form>

        </b-container>
      </b-col>

      <b-col class="register" md="4">
        <b-container>
          <b-row class="margin-30">
            <b-col>
              <h3 style="color: white">New here? Create an account now</h3>
            </b-col>
          </b-row>
          <b-row class="margin-30">
            <b-col>
              <p>Sign up now and get lots of benefits!</p>
            </b-col>
          </b-row>
          <b-row class="margin-30">
            <b-col @click="goToRegister" class="rectangle-button white-button">
              REGISTER
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SignupForm from "@/components/login/SignupForm";
import axios from "axios";
export default {
  name: "LoginForm",
  components: {SignupForm},
  data: function() {
    return {
      name: 'George Marian',
      role: 'admin',
      user: {},
      username: '',
      password: '',

    }
  },
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    makeToast(variant = null,content) {
      this.$bvToast.toast(content, {
        variant: variant,
        solid: true,
        autoHideDelay: 3000,
      })
    },
    login(){
      if (this.username !== '' && this.password !== '') {
        const loginURL = 'http://localhost:8080/user/login';
        let loginData = {
          username: this.username,
          password: this.password,
        }
        const loginRequest = axios.post(loginURL,loginData);

        loginRequest.then((response) =>{
          this.user = response.data;
          sessionStorage.setItem('crtUser', JSON.stringify(response.data));
          this.$router.push('/');
        }).catch((error)=> {
          sessionStorage.removeItem('crtUser');
          this.makeToast('danger', 'Credentials invalid');
        })

      }
    },
  }
}
</script>

<style scoped lang="scss">
  .login-form {
    margin-top: 60px;
    height: 100%;
  }
  .form {

  }
  .login-button {
    width: 200px;
  }
  .register {
    background-color: #42b983;
  }
</style>