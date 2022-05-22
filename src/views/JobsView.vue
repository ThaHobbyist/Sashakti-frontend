<template>
  <div class="root pa-10">
    <div class="search d-flex flex-column justify-center align-center w-100">
      <div class="headin text-h4 text-center">
        Apply for a job that you are looking for, and start earning
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
            <v-btn class="rounded-pill" variant="outlined">Apply</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "JobsView",
  data() {
    return {
      dataSet: [
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
        {
          title: "Citizen Reporter",
          Content:
            "Give us updates on the situation of your place from the civilian point of view",
        },
        {
          title: "Citizen Reporter",
          Content:
            "Give us updates on the situation of your place from the civilian point of view",
        },
        {
          title: "Citizen Reporter",
          Content:
            "Give us updates on the situation of your place from the civilian point of view",
        },
        {
          title: "Citizen Reporter",
          Content:
            "Give us updates on the situation of your place from the civilian point of view",
        },
      ],
    };
  },
};
</script>
