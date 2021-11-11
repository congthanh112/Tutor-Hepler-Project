import React, { useState, useEffect } from "react";
import "./student.scss";
import axios from "axios";
import Pagination from "../../pagination/Pagination";
import GetGrade from "./GetGrade";
import GetSchool from "./GetSchool";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const Student = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/students", {
                        params: {                         
                            PageSize: 100
                        }
                    })
                    .then((response) => {
                        setStudent(response.data.data);   
                        student.map(item => console.log(item.courses) )
                     });
            } catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }, []);

    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{backgroundColor: '#a7fc79'}}>
                    <TableRow>
                        <TableCell style={{ width: "4%" }}>No.</TableCell>
                        <TableCell align="center" style={{ width: "36%" }}>Personal Information</TableCell>
                        <TableCell align="center" style={{ width: "12%" }}>Grade&nbsp;</TableCell>
                        <TableCell align="center" style={{ width: "16%" }}>School&nbsp;</TableCell>
                        <TableCell align="right" style={{ width: "18%" }}>Create Date&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {student.map((item, id) => (
                        <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{id + 1}</TableCell>
                            <TableCell align="left">
                                <img src={item.imagePath} width="60" height="60" style={{ marginBottom: '45px', borderRadius: 45}} />
                                <p style={{ display: 'inline-block', marginLeft: '5px' }}>
                                    <h6>{item.fullName}</h6>
                                    {item.email}<br />
                                    {item.phoneNumber}
                                </p>
                            </TableCell>
                            <TableCell align="center">{<GetGrade id={item.gradeId}/>}</TableCell>
                            <TableCell align="center">{<GetSchool id={item.schoolId}/>}</TableCell>
                            <TableCell align="right">{item.createAt}</TableCell>              
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Student;



