<template>
  <div class="root d-flex flex-column align-center">
    <CardBox class="tc" :name="courses" />
  </div>
</template>

<script>
import CardBox from "../components/Cards.vue";
export default {
  name: "LandingView",
  components: { CardBox },
  data() {
    return {
      courses: "Top Courses",
    };
  },
};
</script>

<style>
.tc {
  width: 60%;
}
</style>
