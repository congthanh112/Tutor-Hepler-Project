import axiosClient from "./axiosClient";

const tutorRequestApi = {
    getAll() {
        const url = '​​/tutor-requests';
      
        //const url ='​​https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests';
        return axiosClient.get(url)
    },
    delete(id) {
        const url = `​/tutor-requests​/${id}`
        return axiosClient.delete(url);
    }
};

export default tutorRequestApi;