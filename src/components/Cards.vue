<template>
  <v-card variant="outlined" class="root ma-10 rounded-xl">
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-carousel
      class="rounded-b-xl"
      cycle
      hide-delimiter-background="true"
      show-arrows="hover"
      height="200"
    >
      <v-carousel-item
        class="fill-height"
        v-for="(data, i) in dataSet"
        :key="i"
      >
        <v-card class="fill-height pa-10">
          <v-card-title> {{ data.title }} </v-card-title>
          <v-card-text> {{ data.Content }} </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  name: "CardBox",
  props: ["name"],
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
        {
          title: "Basics of DSA",
          Content: "Learn the basic of algorithms in just 20 days",
        },
      ],
    };
  },
};
</script>

<style scoped>
.root {
  min-width: min-content;
}

.items {
  width: 500px;
}
</style>
