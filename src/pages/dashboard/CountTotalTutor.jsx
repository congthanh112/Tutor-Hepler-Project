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

const CountTotalTutor = () => {
    const [totalTutor, setTotalTutor] = useState();

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutors", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        setTotalTutor(response.data.data.length);
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, []);
    return (
        <span>
           {totalTutor}
        </span>
    )
}


export default CountTotalTutor 
