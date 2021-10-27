import React, { useState, useEffect } from 'react';
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


const SchoolList = (areaId) => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        if(areaId === undefined) {
            console.log("DEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
            const fetchRequest = async () => {
                try {
                    await axios
                        .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/areas")
                        .then((response) => {
                            setResult(response.data)
                        });
    
                } catch (error) {
                    console.log(error);
                }
            }
            fetchRequest();
        } else {
            console.log("UNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
            const fetchRequest = async () => {
                try {
                    await axios
                        .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/areas/${areaId}`)
                        .then((response) => {
                            setResult(response.data)
                        });
    
                } catch (error) {
                    console.log(error);
                }
            }
            fetchRequest();
        }
        
    }, [areaId])




    return (
        <div>AAAAAAAAAAAAAAAAAAAA</div>
    )
}

export default SchoolList