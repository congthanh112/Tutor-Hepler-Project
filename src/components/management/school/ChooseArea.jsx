import React, { useState } from 'react';
import "./school.scss"
import axios from "axios";

import { Box, InputLabel, MenuItem, FormControl, Select, Button, Modal, Typography, TextField } from '@mui/material'
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

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [schoolName, setSchoolName] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [schoolArea, setSchoolArea] = useState('');

    const handleAddSchool = () => {
        try {
            axios
                .post("https://tutorhelper20210920193710.azurewebsites.net/api/v1/schools", {
                    "schoolName": schoolName,
                    "address": schoolAddress,
                    "schoolLevel": parseInt(schoolType),
                    "areaId": schoolArea
                })
                .then(() => {
                    window.location.reload();
                })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeSchoolName = (event) => {
        setSchoolName(event.target.value);
    }
    const handleChangeSchoolType = (event) => {
        setSchoolType(event.target.value);
    }
    const handleChangeSchoolAddress = (event) => {
        setSchoolAddress(event.target.value);
    }
    const handleChangeSchoolArea = (event) => {
        setSchoolArea(event.target.value);
    }


    return (
        <div style={{ display: "inline-flex" }}>
            <div style={{ width: 900 }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Select Area</InputLabel>
                        <Select onChange={handleChangeIdSelected}>
                            <MenuItem value="all">All</MenuItem>
                            {listArea.map((item) => {
                                return [
                                    <MenuItem value={item.areaId}>{item.areaName}</MenuItem>
                                ]
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <Button variant="contained" startIcon={<AddCircleOutlineIcon/>} style={{ marginLeft: 75, width: 125 }} onClick={handleOpen}>
                Add new
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add new School
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div style={{ display: 'inline-flex' }}>
                            <TextField id="outlined-basic" label="School name:" size="small" variant="outlined" value={schoolName} onChange={handleChangeSchoolName} /><br />
                            <div style={{ minWidth: 128 }}>
                                <TextField id="outlined-select-currency" select label="Select school type" sx={{ width: 190, marginLeft: 3 }}  onChange={handleChangeSchoolType}>
                                    {listSchoolType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </div>
                        <TextField id="outlined-basic" label="Address:" size="small" variant="outlined" style={{ marginTop: '25' }} value={schoolAddress} onChange={handleChangeSchoolAddress} /><br />

                        <div style={{ width: 185 }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Select Area</InputLabel>
                                    <Select onChange={handleChangeSchoolArea}>
                                        {listArea.map((item) => {
                                            return [
                                                <MenuItem value={item.areaId}>{item.areaName}</MenuItem>
                                            ]
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <button style={{ marginLeft: 230, backgroundColor: "#04c23d" }} onClick={() => handleAddSchool()}>Add</button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const listSchoolType = [
    {
        value: '5',
        label: 'Tieu hoc',
    },
    {
        value: '9',
        label: 'Trung hoc Co sơ',
    },
    {
        value: '12',
        label: 'Trung hoc Pho thong',
    },
];


export default ChooseArea;
