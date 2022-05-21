<template>
  <div class="root">
    <AuthBox />
  </div>
</template>

<script>
import AuthBox from "../components/AuthBox.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loginview",
  components: { AuthBox },
};
</script>
