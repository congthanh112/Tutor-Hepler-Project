import React, { useState } from "react";
import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const GetGrade = ({ id }) => {
    const [grade, setGrade] = useState();

    try {
        axios
            .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/grades/${id}`)
            .then((response) => {
                setGrade(response.data.gradeName);
            })
    } catch (error) {
        console.log(error);
    }

    return (
        <div>{grade}</div>
    )

};

export default GetGrade;

