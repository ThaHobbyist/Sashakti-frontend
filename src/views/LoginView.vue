<template>
  <div class="root h-100 d-flex justify-center align-center">
    <AuthBox
      :class="{
        'max-width': !this.$vuetify.display.smAndDown,
        'w-75': this.$vuetify.display.smAndDown,
        'ma-10': this.$vuetify.display.smAndDown,
      }"
      class="h-50"
    />
  </div>
</template>

<script>
import AuthBox from "../components/AuthBox.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loginview",
  components: { AuthBox },
  mounted() {
    console.log(this.$vuetify.display.smAndDown);
  },
};
</script>

<style scoped>
.max-width {
  width: 40%;
}
</style>
