import React, { useState } from 'react';
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

const ChooseGrade = (props) => {
    const { listGrade, handleChangeIdSelected } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [subjectName, setSubjectName] = useState('');
    const [subjectGrade, setSubjectGrade] = useState('');

     const handleAddSubject = () => {
        try {
            axios
                .post("https://tutorhelper20210920193710.azurewebsites.net/api/v1/subjects", {
                    "subjectName": subjectName,
                    "gradeId": parseInt(subjectGrade),
                })
                .then(() => {
                    window.location.reload();
                })
        } catch (error) {
            console.log(error);
        }
     };

    const handleChangeSubjectName = (event) => {
        setSubjectName(event.target.value);
    }
    const handleChangeSubjectGrade = (event) => {
        setSubjectGrade(event.target.value);
    }


    return (
        <div style={{ display: "inline-flex" }}>
            <div style={{ width: 250 }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Select Grade</InputLabel>
                        <Select onChange={handleChangeIdSelected}>
                            <MenuItem value="all">All</MenuItem>
                            {listGrade.map((item) => {
                                return [
                                    <MenuItem value={item.gradeId}>{item.gradeName}</MenuItem>
                                ]
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <Button variant="contained" startIcon={<AddCircleOutlineIcon />} style={{ marginLeft: 75, width: 125 , color: "#fff"}} onClick={handleOpen}>
                Add new
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add new Subject
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div style={{ display: 'inline-flex' }}>
                            <TextField id="outlined-basic" label="School name:" size="small" variant="outlined" value={subjectName} onChange={handleChangeSubjectName} /><br />
                            <div style={{ width: 185 }}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel>Select Grade</InputLabel>
                                        <Select onChange={handleChangeSubjectGrade}>
                                            {listGrade.map((item) => {
                                                return [
                                                    <MenuItem value={item.gradeId}>{item.gradeName}</MenuItem>
                                                ]
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <button style={{ marginLeft: 230, backgroundColor: "#04c23d" }} onClick={() => handleAddSubject()}>Add</button>
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


export default ChooseGrade;
