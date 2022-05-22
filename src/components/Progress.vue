<template>
  <v-card variant="outlined" class="rounded-xl pa-10">
    <div class="user d-flex flex-column align-center">
      <v-img
        class="rounded-circle ma-2"
        src="https://randomuser.me/api/portraits/women/85.jpg"
        :aspect-ratio="1"
        width="100"
      />
      <v-list-item
        class="text-center"
        title="Sandra Jones"
        subtitle="sandra@gmail.com"
      >
      </v-list-item>

      <br />

      <div class="stat d-flex flex-row w-100 align-center justify-center">
        <v-card
          class="w-50 ma-2 rounded-lg d-flex align-center justify-center"
          variant="outlined"
          ><v-card-title v-if="type === 'Candidate' || type === 'Tutor'">{{
            cname
          }}</v-card-title>
        </v-card>
        <v-card
          class="w-50 ma-2 rounded-lg d-flex align-center justify-center"
          variant="outlined"
          ><v-card-title v-if="type === 'Candidate' || type === 'Employer'">{{
            jname
          }}</v-card-title>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProgressBox",
  props: ["type", "cname", "jname"],
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>
