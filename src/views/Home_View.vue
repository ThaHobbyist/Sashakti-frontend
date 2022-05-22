<template>
  <div class="root d-flex flex-column h-100 justify-center align-center">
    <div class="heading text-center">
      <div class="heading_text">SASHAKTI</div>
      <div class="subheading_text">
        Learning and Working made easy in Post-War
      </div>
    </div>
    <v-btn class="reg mt-15 rounded-pill" variant="outlined">
      <router-link class="text-white" to="/login" style="text-decoration: none">
        GET STARTED <v-icon icon="mdi-arrow-right" />
      </router-link>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.heading_text {
  font-family: Samarkan;
  font-size: 150px;
}
</style>
