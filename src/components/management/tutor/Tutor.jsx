import React, { useState, useEffect } from "react";
import "./tutor.scss";
import axios from "axios";

import Pagination from "../../pagination/Pagination";


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

    return (
        <div className="col-12">
            <table className="table table-bordered" border="2">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Information</th>
                        <th>Grade</th>
                        <th>Create Date</th>                  
                    </tr>
                </thead>
                <tbody>
                    {tutor.map((item, id) => {
                        return [
                            <tr>
                                <td>{id + 1}</td>
                                <td>
                                    <img src={item.imagePath} width="60" height="60" style={{marginBottom: '45px', borderRadius: 20}}/>
                                    <p style={{display: 'inline-block', marginLeft: '5px'}}>
                                        <h6>{item.fullName}</h6>
                                        {item.email}<br/>
                                        {item.phoneNumber}
                                    </p>                                   
                                </td>
                                {/* <td>{<GetGrade id={item.gradeId}/>}</td>
                                <td>{<GetSchool id={item.schoolId}/>}</td>                                */}
                                <td>{item.courses.title}</td>
                                <td>{item.createAt}</td>
                                                    
                            </tr>
                        ]
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Tutor;

