<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: "Samarkan";
  src: url(./assets/fonts/Samarkan.TTF) format("truetype");
}
</style>
