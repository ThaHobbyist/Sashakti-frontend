<template>
  <div class="root d-flex flex-column rounded-xl mx-auto">
    <div class="btns d-flex flex-row">
      <div
        class="optn d-flex sign-in mx-auto h-100 w-100 justify-center align-center rounded-be-xl"
        :class="{ active: !reg, passive: reg, 'right-bar': reg }"
        @click="reg = false"
      >
        Sign-In
      </div>
      <div
        class="optn d-flex register mx-auto h-100 w-100 justify-center align-center rounded-bs-xl"
        :class="{ active: reg, passive: !reg, 'left-bar': !reg }"
        @click="reg = true"
      >
        Register
      </div>
    </div>
    <div v-if="reg" class="form mx-auto w-75 d-flex flex-column pa-8 my-auto">
      <v-text-field v-model="username" label="Username" variant="outlined">
      </v-text-field>
      <v-text-field v-model="email" label="Email-ID" variant="outlined">
      </v-text-field>
      <v-text-field v-model="passwd" label="Password" variant="outlined">
      </v-text-field>
      <v-btn class="w-auto">Register</v-btn>
    </div>
    <div
      v-if="!reg"
      class="form mx-auto w-75 d-flex flex-column pa-8 justify-center my-auto"
    >
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
      reg: false,
      username: "",
      email: "",
      passwd: ""
    };
  }
};
</script>

<style scoped>
.root {
  border: 3px white solid;
}

.right-bar {
  border-right: 1px white solid;
}

.left-bar {
  border-left: 1px white solid;
}

.optn { 
  cursor: pointer;
  font-size: large;
}
.btns {
  height: 50px;
}

.active {
  color: white;
}

.passive {
  color: grey;
  border-bottom: 1px white solid;
}
</style>
