<template>
  <div class="root d-flex flex-row fill-height">
    <ProgressBox class="w-50 ma-10" />
    <div class="promo w-75 d-flex flex-column align-center">
      <CardBox class="tc" :name="courses" />
      <CardBox class="tc" :name="jobs" />
      <div class="oppur d-flex flex-row ma-10">
        <v-btn class="crs ma-10 rounded-pill" variant="outlined"
          ><router-link
            to="/courses"
            class="text-white"
            style="text-decoration: none"
          >
            Start A Course
            <v-icon icon="mdi-arrow-right" />
          </router-link>
        </v-btn>
        <v-btn class="crs ma-10 rounded-pill" variant="outlined"
          ><router-link
            to="/jobs"
            class="text-white"
            style="text-decoration: none"
          >
            Apply for a Job
            <v-icon icon="mdi-arrow-right" />
          </router-link>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import CardBox from "../components/Cards.vue";
import ProgressBox from "../components/Progress.vue";
export default {
  name: "LandingView",
  components: { CardBox, ProgressBox },
  data() {
    return {
      courses: "Top Courses",
      jobs: "Top Jobs",
    };
  },
};
</script>

<style>
.tc {
  width: 60%;
}
</style>
