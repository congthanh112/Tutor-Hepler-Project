import React, { useState } from "react";
import "./tutor-request.scss";
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

const GetAuthor = ({ id }) => {
    const [author, setAuthor] = useState([]);

    try {
        axios
            .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/students/${id}`)
            .then((response) => {
                setAuthor(response.data.data.fullName);
            })
    } catch (error) {
        console.log(error);
    }

    return (
        <div>{author}</div>
    )

};

export default GetAuthor;

