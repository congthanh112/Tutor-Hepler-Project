import React, { useState, useEffect } from "react";
import "./tutor.scss";
import axios from "axios";

import Pagination from "../../pagination/Pagination";

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

const Tutor = () => {
    const [tutor, setTutor] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [resultPerPage, setResultPerPage] = useState(9);

    useEffect(() => {
        const fetchRequest = async () => {
            //setLoading(true);
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutors", {
                        params: {
                            //PageNume: currentPage,
                            PageSize: 100
                        }
                    })
                    .then((response) => {
                        setTutor(response.data.data);
                        //setLoading(false);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }, []);

    // //Get current result
    // const indexOfLastResult = currentPage * resultPerPage;
    // const indexOfFirstResult = indexOfLastResult - resultPerPage;
    // const currentResult = tutor.slice(indexOfFirstResult, indexOfLastResult);

    // //Change page 
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // return (
    //     <div className="container mt-5">
    //         <Card result={currentResult} loading={loading}/>
    //         <Pagination resultPerPage={resultPerPage} totalResult={tutor.length} paginate={paginate} />
    //     </div>
    // )

    // return (
    //     <div className="col-12">
    //         <table className="table table-bordered" border="2">
    //             <thead>
    //                 <tr>
    //                     <th>No.</th>
    //                     <th>Information</th>
    //                     <th>Grade</th>
    //                     <th>Create Date</th>                  
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {tutor.map((item, id) => {
    //                     return [
    //                         <tr>
    //                             <td>{id + 1}</td>
    //                             <td>
    //                                 <img src={item.imagePath} width="60" height="60" style={{marginBottom: '45px', borderRadius: 20}}/>
    //                                 <p style={{display: 'inline-block', marginLeft: '5px'}}>
    //                                     <h6>{item.fullName}</h6>
    //                                     {item.email}<br/>
    //                                     {item.phoneNumber}
    //                                 </p>                                   
    //                             </td>
    //                             {/* <td>{<GetGrade id={item.gradeId}/>}</td>
    //                             <td>{<GetSchool id={item.schoolId}/>}</td>                                */}
    //                             <td>{item.courses.title}</td>
    //                             <td>{item.createAt}</td>

    //                         </tr>
    //                     ]
    //                 })}
    //             </tbody>
    //         </table>
    //     </div>
    // );
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#79d9fc' }}>
                    <TableRow>
                        <TableCell style={{ width: "4%" }}>No.</TableCell>
                        <TableCell align="center" style={{ width: "33%" }}>Personal Information</TableCell>
                        <TableCell align="center" style={{ width: "16%" }}>Email</TableCell>
                        <TableCell align="center" style={{ width: "16%" }}>Phone Number</TableCell>
                        <TableCell align="right" style={{ width: "18%" }}>Create Date&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tutor.map((item, id) => (
                        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{id + 1}</TableCell>
                            <TableCell align="left">
                                <img src={item.imagePath} width="50" height="50" style={{ borderRadius: 45 }} />
                                <p style={{ display: 'inline-block', marginLeft: '5px' }}>
                                    <h6>{item.fullName}</h6>
                                </p>
                            </TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                            <TableCell align="center"> {item.phoneNumber}</TableCell>
                            <TableCell align="right">{item.createAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Tutor;

