import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./school.scss"

import { Box, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const ChooseArea = (props) => {
    const { listArea, handleChangeIdSelected } = props;


    return (
        <div style={{display: "inline-flex"}}>
            <div style={{ width: 900 }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Select Area</InputLabel>
                        <Select onChange={handleChangeIdSelected}>
                            <MenuItem value="all">All</MenuItem>
                            {listArea.map((item, id) => {
                                return [
                                    <MenuItem value={item.areaId}>{item.areaName}</MenuItem>
                                ]
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <Button variant="contained" startIcon={<AddCircleOutlineIcon />} style={{ marginLeft: 75, width: 125 }}>
                Add new
            </Button>

        </div>
    )
}

export default ChooseArea;
