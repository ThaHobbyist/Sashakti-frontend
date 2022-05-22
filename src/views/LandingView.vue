<template>
  <div class="root d-flex flex-row fill-height">
    <ProgressBox
      class="w-50 ma-10"
      :type="type"
      :cname="courses"
      :jname="jobs"
    />
    <div class="promo w-75 d-flex flex-column align-center justify-center">
      <div class="d-flex flex-column align-center" v-if="type === 'Candidate'">
        <CardBox class="tc" :name="courses" :dataSet="courses_dataSet" />
        <CardBox class="tc" :name="jobs" :dataSet="jobs_dataSet" />
      </div>
      <div v-if="type === 'Employer'">
        <CardBox class="tc" :name="jobs" :dataSet="jobs_dataSet" />
      </div>
      <div v-if="type === 'Tutor'">
        <CardBox class="tc" :name="courses" :dataSet="courses_dataSet" />
      </div>
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

const type = localStorage.getItem("_t");

export default {
  name: "LandingView",
  components: { CardBox, ProgressBox },
  data() {
    return {
      type: "Candidate",
      courses:
        type == "Candidate"
          ? "Top Courses"
          : type == "Tutor"
          ? "My Courses"
          : "",
      jobs:
        type == "Candidate" ? "Top Jobs" : type == "Employer" ? "My Jobs" : "",
      jobs_dataSet: [
        {
          title: "Detect Images for ML model",
          Content:
            "We are making a ml model and need to find the object in the images first to know that the images are correct.",
        },
        {
          title: "Art Comission",
          Content:
            "Looking for a 3d artist to make a isometric model of a garden",
        },
        {
          title: "Citizen Reporter",
          Content:
            "Give us updates on the situation of your place from the civilian point of view",
        },
      ],
      courses_dataSet: [
        {
          title: "ML Course",
          Content: "A Short ML course to get started with freelancing",
        },
        {
          title: "CGI with blender",
          Content:
            "Get started with basics of blender and start recieving commissions",
        },
        {
          title: "Python Course",
          Content: "Become A Pythonista in just 30 days",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tc {
  width: 60%;
}
</style>
