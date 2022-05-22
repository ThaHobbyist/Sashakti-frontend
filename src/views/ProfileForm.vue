<template>
  <div class="form mx-auto w-75 d-flex flex-column pa-8 my-auto rounded-xl">
    <v-text-field v-model="name" label="Full Name" variant="outlined">
    </v-text-field>
    <v-text-field v-model="email" label="Email-ID" variant="outlined">
    </v-text-field>
    <v-select
      v-model="type"
      :items="items"
      outlined
      label="Choose the kind that fits you"
    ></v-select>
    <div v-if="type === 'Employer'" class="other">
      <v-text-field
        v-model="phone"
        label="Phone"
        variant="outlined"
      ></v-text-field>
      <v-text-fieldarea
        v-model="address"
        label="Address"
        variant="outlined"
      ></v-text-fieldarea>
      <v-text-field
        v-model="city"
        label="City"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="state"
        label="State"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="zipcode"
        label="Pin-Code"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="country"
        label="Country"
        variant="outlined"
      ></v-text-field>
      <div class="company">Company Details</div>
      <v-text-field
        v-model="company_name"
        label="Name"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="company_description"
        label="Description"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="company_website"
        label="Website"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="company_logo"
        label="Logo URL"
        variant="outlined"
      ></v-text-field>
    </div>
    <div v-else-if="type === 'Tutor'" class="other">
      <v-text-field
        v-model="company"
        label="Company"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="qualifications"
        label="Qualifications"
        variant="outlined"
      ></v-text-field>
      <v-textarea v-model="about" label="About" variant="outlined"></v-textarea>
      <v-text-field
        v-model="image"
        label="Image URL"
        variant="outlined"
      ></v-text-field>
    </div>
    <div v-else-if="type === 'Candidate'" class="other">
      <v-text-field
        v-model="phone"
        label="Phone"
        variant="outlined"
      ></v-text-field>
      <v-text-fieldarea
        v-model="address"
        label="Address"
        variant="outlined"
      ></v-text-fieldarea>
      <v-text-field
        v-model="city"
        label="City"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="State"
        label="State"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="zipcode"
        label="Pin-Code"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="country"
        label="Country"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="qualification"
        label="Qualifications"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="skill"
        label="Skills"
        variant="outlined"
      ></v-text-field>
    </div>
    <v-btn class="w-auto" @click="updateProfile(type)">Complete Profile</v-btn>
  </div>
</template>

<script>
export default {
  name: "ProfileForm",
  data() {
    return {
      type: "",
      items: ["Candidate", "Tutor", "Employer"],
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      company_name: "",
      company_description: "",
      company_logo: "",
      zipcode: "",
      company: "",
      qualifications: "",
      qualification: "",
      about: "",
      image: "",
      skill: "",
    };
  },
  methods: {
    async updateProfile(type) {
      let err;
      switch (type) {
        case "Candidate":
          ({ err } = await this.$api.updateCandidateProfile({
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            city: this.city,
            state: this.state,
            zipcode: this.zipcode,
            country: this.country,
            qualification: this.qualification,
          }));
          if (err) {
            console.log(err);
          }
          break;
        case "Tutor":
          ({ err } = await this.$api.updateTutorProfile({
            name: this.name,
            email: this.email,
            company: this.company,
            qualifications: this.qualifications,
            about: this.about,
            image: this.image,
          }));
          if (err) {
            console.log(err);
          }
          break;
        case "Employer":
          ({ err } = await this.$api.updateEmployerProfile({
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            city: this.city,
            state: this.state,
            zipcode: this.zipcode,
            country: this.country,
            company_name: this.company_name,
            company_description: this.company_description,
            company_website: this.company_website,
            company_logo: this.company_logo,
          }));
          if (err) {
            console.log(err);
          }
          break;

        default:
          break;
      }
      this.$router.push("/dash");
    },
  },
};
</script>

<style scoped>
.form {
  border: 1px solid white;
}
</style>
