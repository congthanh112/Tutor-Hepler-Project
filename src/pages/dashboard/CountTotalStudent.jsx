import React, { useState, useEffect } from 'react'
import "./dashboard.scss"
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

const CountTotalStudent = () => {
    const [totalStudent, setTotalStudent] = useState();

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/students", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        setTotalStudent(response.data.data.length);
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, []);
    return (
        <span>
           {totalStudent}
        </span>
    )
}


export default CountTotalStudent
