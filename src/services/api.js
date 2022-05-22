/* eslint-disable */
import axios from "axios";

export default () => {
  const client = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const _token = localStorage.getItem('tk');
  if (_token) {
    client.defaults.headers.common[
      "Authorization"
    ] = `Token ${_token}`; 
  }
  const err = "Something went wrong please try again";
  return {
    client,
    async register(username, password) {
      if (_token) {
        return true;
      }
      const res = await this.client.post("accounts/register", {
        username,
        password,
      });
      if (res.status != 201) {
        return { err };
      }
      return await this.login(username, password);
    },
    async login(username, password) {
      if (_token) {
        return true;
      }
      const res = await this.client.post("accounts/login", {
        username,
        password,
      });
      if (res.status != 200) {
        return { err };
      }
      const token = res.data.token;
      this.client.defaults.headers.common[
        "Authorization"
      ] = `Token ${token}`;
      localStorage.setItem('tk', token);
      return true;
    },
    async logout() {
      const res = await this.client.post("accounts/logout");
      if (res.status != 200) {
        return { err };
      }
      delete this.client.defaults.headers.common[
        "Authorization"
      ]
      return true;
    },
    async updateCandidateProfile(/*{
      name,
      email,
      phone,
      address,
      city,
      state,
      zipcode,
      country,
      qualification,
    }*/ profile ) {
      const res = await this.client.post("update_candidate_profile", profile);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async updateTutorProfile(/*{
      name,
      email,
      company,
      qualifications,
      about,
      image,
    }*/ profile ) {
      const res = await this.client.post("update_tutor_profile", profile);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async updateEmployerProfile(/*{
      name,
      email,
      phone,
      address,
      city,
      state,
      zipcode,
      country,
      company_name,
      company_description,
      company_website,
      company_logo,
    }*/ profile ) {
      const res = await this.client.post("update_employer_profile", profile);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async getTopJobs(count) {
      const res = await this.client.get(`top/jobs/${count}`);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async getTopCourses(count) {
      const res = await this.client.get(`top/courses/${count}`);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async getCandidateCourses() {
      const res = await this.client.get("candidate/candidatecourse");
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async getCandidateJobs() {
      const res = await this.client.get("candidate/candidatejob");
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async getAllCourses() {
      const res = await this.client.get("courses/getcourses");
      if (res.status != 200) {
        return { err };
      }
      return res.data; 
    },
    async getAllJobs() {
      const res = await this.client.get("jobs/getjobs");
      if (res.status != 200) {
        return { err };
      }
      return res.data; 
    },
    async searchCourse(q) {
      const res = await this.client.get(`search/course/${q}`);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
    async searchJob(q) {
      const res = await this.client.get(`search/jobs/${q}`);
      if (res.status != 200) {
        return { err };
      }
      return res.data;
    },
  };
};
