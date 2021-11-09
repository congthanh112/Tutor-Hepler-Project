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

const GetSchool = ({ id }) => {
    const [schoolName, setSchoolName] = useState('');
    const [schoolType, setSchoolType] = useState('');

    try {
        axios
            .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/schools/${id}`)
            .then((response) => {
                setSchoolName(response.data.data.schoolName);
                if (response.data.data.schoolLevel == 12) {
                    setSchoolType("Trung hoc Pho thong")
                } else if (response.data.data.schoolLevel == 9) {
                    setSchoolType("Trung hoc Co so")
                } else if (response.data.data.schoolLevel == 5) {
                    setSchoolType("Tieu hoc")
                }
            })
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <div>{schoolType}</div>
            <div>{schoolName}</div>
        </div>
    )

};

export default GetSchool;

