<template>
  <div class="root d-flex flex-column rounded-xl mx-auto pa-5">
    <div class="btns d-flex flex-row h-25">
      <div class="sign-in mx-auto h-100">
        <h4>Sign-In</h4>
      </div>
      <div class="register mx-auto h-100">
        <h4>Register</h4>
      </div>
    </div>
    <div v-if="reg" class="form mx-auto w-75 d-flex flex-column">
      <v-text-field v-model="username" label="Username" variant="outlined">
      </v-text-field>
      <v-text-field v-model="emailid" label="Email-ID" variant="outlined">
      </v-text-field>
      <v-text-field v-model="passwd" label="Password" variant="outlined">
      </v-text-field>
      <v-btn class="w-auto">Register</v-btn>
    </div>
    <div v-if="!reg" class="form mx-auto w-75 d-flex flex-column">
      <v-text-field v-model="username" label="Username" variant="outlined">
      </v-text-field>
      <v-text-field v-model="passwd" label="Password" variant="outlined">
      </v-text-field>
      <v-btn class="w-auto">Log-In</v-btn>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "AuthBox",
  data() {
    return {
      reg: Boolean,
    };
  },
};
</script>

<style scoped>
.root {
  border: 1px white solid;
}
</style>
