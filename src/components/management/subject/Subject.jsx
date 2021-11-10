import React, { useState, useEffect } from 'react';
import axios from "axios";

import ChooseGrade from './ChooseGrade';
import SubjectList from './SubjectList';

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const Subject = () => {
    const [listGrade, setListGrade] = useState([]);
    const [idSelected, setIdSelected] = useState("all");

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/grades", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        setListGrade(response.data)                    
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
            <ChooseGrade listGrade={listGrade} handleChangeIdSelected={handleChangeIdSelected} />
            <SubjectList id={idSelected} />
        </div>

    );
};

export default Subject