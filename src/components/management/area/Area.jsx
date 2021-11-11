import React, { useState, useEffect } from 'react';
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import { Box, InputLabel, MenuItem, FormControl, Select, Modal, Typography, TextField } from '@mui/material'

import {
    useGridApiRef,
    DataGridPro,
    GridToolbarContainer,
    GridActionsCellItem,
} from '@mui/x-data-grid';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';


axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


const Area = () => {
    const [listArea, setListArea] = useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [idEdit, setIdEdit] = useState();
    const [newAreaName, setNewAreaName] = useState();

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

    const handleEditClick = () => {
        console.log("AAAAAAAAAAAAA")
        try {
             axios
                .put("https://tutorhelper20210920193710.azurewebsites.net/api/v1/areas", {
                    "areaId": idEdit,
                    "areaName": newAreaName,
                    params: {
                        id: idEdit,                      
                    }                                                           
                })
                .then((response) => {
                    window.location.reload();
                });

        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteClick = (id) => {
        const confirmm = window.confirm("Are you sure to delete this item?")
        if (confirmm === true) {
            try {
                axios
                    .delete(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/areas/${id}`)
                    .then(() => {
                        window.location.reload();
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleChangeAreaName = (event) => {
        setNewAreaName(event.target.value);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#79fcd7' }}>
                    <TableRow>
                        <TableCell style={{ width: "4%" }}>No.</TableCell>
                        <TableCell align="center" style={{ width: "36%" }}>Area</TableCell>
                        <TableCell align="center" style={{ width: "16%" }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listArea.map((item, id) => (
                        <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{id + 1}</TableCell>
                            <TableCell align="right">{item.areaName}</TableCell>
                            <TableCell align="right">
                                <GridActionsCellItem icon={<EditIcon />} 
                                //onClick={handleOpen} 
                                onClick={() => setIdEdit(item.areaId), handleOpen}
                                />
                                <GridActionsCellItem icon={<DeleteIcon />} onClick={() => handleDeleteClick(item.areaId)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Area name
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div style={{ display: 'inline-flex' }}>
                            <TextField id="outlined-basic" label="Input new area name:" size="small" variant="outlined" value={newAreaName} onChange={handleChangeAreaName} /><br />
                        </div>
                        <button
                            style={{ marginLeft: 20, backgroundColor: "#04c23d" }}
                             onClick={() => handleEditClick()}
                        >
                            Edit
                        </button>
                    </Typography>
                </Box>
            </Modal>
        </TableContainer >

    );
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


export default Area;