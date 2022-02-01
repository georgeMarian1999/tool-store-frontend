<template>
  <b-col md="4">
    <b-container>
      <b-row>
        <b-col>
          <p
              v-b-toggle.user-details-collapse
              class="h1 mb-2 pointer-event"
              id="popover-user"
          >
            <b-icon icon="person-circle"></b-icon>
          </p>
          <b-popover target="popover-user" triggers="hover" placement="top">
            Press to show user information!
          </b-popover>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="separator full-width">

        </b-col>
      </b-row>
      <b-collapse id="user-details-collapse">

        <b-row class="margin-30">
          <b-col>
            <h3>Name:</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{user.name}}
          </b-col>
        </b-row>

        <b-row class="margin-30">
          <b-col>
            <h3>Email:</h3>
          </b-col>
        </b-row>
        <b-row >
          <b-col>
            {{user.email}}
          </b-col>
        </b-row>

        <b-row class="margin-30">
          <b-col>
            <h3>Role:</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{user.role}}
          </b-col>
        </b-row>


        <b-row class="margin-30">
          <b-col>
            <h3>Username:</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{user.username}}
          </b-col>
        </b-row>
      </b-collapse>
    </b-container>
  </b-col>
</template>

<script>
export default {
  name: "UserDetails",
  props: ['user']
}
</script>

<style scoped>

</style>