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

const CountPendingRequest = () => {
    const [totalRequest, setTotalRequest] = useState();

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        let result = response.data.data;
                        let count = 0;
                        result.map(item => {
                            if (item.status == "Pending") {
                                count++;
                            }
                        });
                        setTotalRequest(count);
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, []);
    return (
        <span>
            {totalRequest}
        </span>
    )
}


export default CountPendingRequest
