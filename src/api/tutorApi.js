import axiosClient from "./axiosClient";

const tutorApi = {
  getAll() {
    const url =
      "https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests";

    return axiosClient.get(url);
  },

  getReportByCountry(country) {
    const url = `https://api.covid19api.com/dayone/country/${country}`;

    return axiosClient.get(url);
  },
};

export default tutorApi;
