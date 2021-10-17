import axiosClient from "./axiosClient";

const tutorApi = {
  getAll() {
    const url = "/tutors"
    return axiosClient.get(url);
  },

};

export default tutorApi;
