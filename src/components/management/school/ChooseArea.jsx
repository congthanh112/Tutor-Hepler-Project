import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./school.scss"

import { Box, InputLabel, MenuItem, FormControl, Select, Button, Typography, Modal, Paper, TextField } from '@mui/material'
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

    return (
        <div style={{ display: "inline-flex" }}>
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

            <Button variant="contained" startIcon={<AddCircleOutlineIcon />} style={{ marginLeft: 75, width: 125 }} onClick={handleOpen}>
                Add new
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add new School
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2}}>
                        <div style={{ display: 'inline-flex' }}>
                            <TextField id="outlined-basic" label="School name:" size="small" variant="outlined" /><br />
                            <div style={{ minWidth: 128 }}>
                                <TextField id="outlined-select-currency" select label="Select school type"
                                // value={currency}
                                // onChange={handleChange}
                                sx={{width: 190, marginLeft: 3}}
                                >
                                    {schoolType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </div>
                        <TextField id="outlined-basic" label="Address:" size="small" variant="outlined" /><br />

                        <div style={{ width: 185 }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Select Area</InputLabel>
                                    <Select onChange={handleChangeIdSelected}>
                                        {listArea.map((item, id) => {
                                            return [
                                                <MenuItem value={item.areaId}>{item.areaName}</MenuItem>
                                            ]
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <button style={{ marginLeft: 230, backgroundColor: "#04c23d" }} onClick={() => { addSchool() }}>Add</button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

const addSchool = () => {
    console.log('AddSSchoahfaosdho')
}

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

const schoolType = [
    {
        value: 'USD',
        label: 'Tieu hoc',
    },
    {
        value: 'EUR',
        label: 'Trung hoc Co sơ',
    },
    {
        value: 'BTC',
        label: 'Trung hoc Pho thong',
    },
    {
        value: 'JPY',
        label: 'Dai Hoc',
    },
];
export default ChooseArea;
