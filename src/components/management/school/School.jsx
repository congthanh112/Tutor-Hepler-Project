import React, { useState, useEffect } from 'react';
import "./school.scss";
import axios from "axios";

import ChooseArea from './ChooseArea';


axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


const School = () => {

    return (
        <div>
            <ChooseArea />          
        </div>
    )
}


export default School;