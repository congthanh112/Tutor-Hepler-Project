import React, { useState, useEffect } from 'react';
import axios from "axios";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
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

const ChooseArea = () => {
    const [listArea, setListArea] = useState([]);
    const [idSelected, setIdSelected] = useState();

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
    }, [])

    const handleChange = (event) => {
        console.log("NNNNNNNNNNNNNNNNNNNNNNN", event.value)
        setIdSelected(event.value)
    };


    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>Select Area</InputLabel>

                    <Select onChange={handleChange}>
                        <MenuItem value="">All</MenuItem>
                        {listArea.map((item, id) => {
                            return [
                                <MenuItem value={item.areaId}>{item.areaName}</MenuItem>
                            ]
                        })}

                    </Select>
                </FormControl>
            </Box>

            <SchoolList id={idSelected} />

        </div>
    )
}

export default ChooseArea;
