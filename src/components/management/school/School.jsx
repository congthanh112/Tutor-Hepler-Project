import React, { useState, useEffect } from 'react';
import axios from "axios";

import ChooseArea from './ChooseArea';
import SchoolList from './SchoolList';


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
    const [listArea, setListArea] = useState([]);
    const [idSelected, setIdSelected] = useState("all");

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/areas", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        setListArea(response.data)
                    });

            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, [idSelected])

    const handleChangeIdSelected = (event, value) => {
        setIdSelected(value.props.value)
    };
    return (
        <div>
            <ChooseArea listArea={listArea} handleChangeIdSelected={handleChangeIdSelected}  />  
            <SchoolList id={idSelected} />        
        </div>
    )
}


export default School;