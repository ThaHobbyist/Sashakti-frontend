<template>
  <div class="root pa-10">
    <div class="search d-flex flex-column justify-center align-center w-100">
      <div class="headin text-h4 text-center">
        Courses created by mentors, to get you Job ready in no time
      </div>
      <v-text-field
        class="rounded-pill ma-5 w-25"
        variant="outlined"
        prepend-inner-icon="mdi-card-search"
        label="Search"
      >
      </v-text-field>
    </div>
    <v-row>
      <v-col v-for="(data, i) in dataSet" :key="i" cols="16" sm="4">
        <v-card
          class="d-flex flex-row fill-height pa-10 rounded-lg"
          variant="outlined"
        >
          <div class="info d-flex flex-column align-start">
            <v-card-title> {{ data.title }} </v-card-title>
            <v-card-text> {{ data.Content }} </v-card-text>
          </div>
          <div class="reg w-50 d-flex justify-center align-center">
            <v-btn class="rounded-pill" variant="outlined">Enroll</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CoursesView",
  data() {
    return {
      dataSet: [
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
        {
          title: "Basics of DSA",
          Content: "Learn the basic of algorithms in just 20 days",
        },
        {
          title: "Basics of DSA",
          Content: "Learn the basic of algorithms in just 20 days",
        },
        {
          title: "Basics of DSA",
          Content: "Learn the basic of algorithms in just 20 days",
        },
        {
          title: "Basics of DSA",
          Content: "Learn the basic of algorithms in just 20 days",
        },
      ],
    };
  },
};
</script>
