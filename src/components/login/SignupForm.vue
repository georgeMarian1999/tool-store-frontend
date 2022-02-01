<template>
  <b-container class="register-form">
    <b-row>
      <b-col md="2"></b-col>
      <b-col md="8">
        <b-container>
          <b-form>
            <b-row>
              <b-col>
                <h4>Please create an account</h4>
              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col class="separator">

              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="form.username" required placeholder="Username">

                </b-form-input>
              </b-col>
            </b-row>

            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="form.email" required placeholder="Email">

                </b-form-input>
              </b-col>
            </b-row>

            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="form.name" required placeholder="Name">

                </b-form-input>
              </b-col>
            </b-row>

            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="form.password" type="password" placeholder="Password">

                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col>
                <b-form-input v-model="form.password" type="password" placeholder="Confirm Password">

                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="margin-30">
              <b-col md="4">

              </b-col>
              <b-col md="4">
                <b-overlay :show="loading">
                  <div @click="register" class="rectangle-button register-button">
                    REGISTER
                  </div>
                </b-overlay>

              </b-col>
              <b-col md="4">

              </b-col>
            </b-row>
          </b-form>

        </b-container>
      </b-col>
      <b-col md="2"></b-col>

    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SignupForm",
  props: ['form', 'loading'],
  data: function() {
    return {

    }
  },
  methods: {
    register() {
      console.log("REGISTER");
      this.$emit('register');
    }
  }
}
</script>

<style scoped lang="scss">
  .register-form{
    margin-top: 60px;
    height: 100%;
  }
  .register-button{
    width: 200px;
  }
</style>