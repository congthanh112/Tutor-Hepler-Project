import React, { useState, useEffect } from "react";
import "./tutor-request.scss";
// import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

import axios from "axios";


axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


const Card = () => {
    const [request, setRequest] = useState([]);
    const [name, setName] = useState(null);
    

    useEffect(() => {
        try {
            axios
                .get(
                    "https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests"
                )
                .then((response) => {
                    setRequest(response.data.data);

                });

        } catch (error) {
            console.log("Error");
        }
    }, []);


    function getStudentById(id) {
 
            axios
                .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/students/${id}`)
                .then((response) => {
                    console.log(response.data.data.fullName);
                   
                })
              
                .catch(err => {
                    console.log(err);
                });
    }
    //const getStudentById = (id) => axios.get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/students/${id}`).response.data.data.fullName;
       
  
  
       

    // const OnChangeStatus = (requestId, requestStatus) => {
    //     useEffect(() => {
    //         try {
    //             axios
    //                 .put(
    //                     "https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests",
    //                     {
    //                         tutorRequestId: requestId,
    //                         status: requestStatus
    //                     }
    //                 )
    //                 .then((response) => {
    //                     setRequest(response.data.data);

    //                 });
    //         } catch (error) {
    //             console.log("Error");
    //         }
    //     }, []);
    // 

    return (
        <div className="col-11">
            <table className="table table-bordered " >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Create Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {request.map((item, id) => {
                        return [

                            <tr>
                                <td>{id + 1}</td>
                                <td>
                                    <p>
                                        <h3>{item.title}</h3>
                                        {item.description}
                                    </p>
                                    <a href="#" className="link">view all</a>
                                </td>
                                <td>{item.studentId}</td>
                                {/* <td>{getStudentById(item.studentId)}</td> */}
                                    {/* <td>a</td> */}
                                <td>{item.createAt}</td>
                                <td className="text">Pending</td>
                                <td className="action">
                                    <button type="button" className="approve">
                                        Approve
                                    </button>
                                    <button type="button" className="reject">
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ]
                    })}
                </tbody>
            </table>
        </div>
    );

};

const TutorRequest = () => {
    return (
        <div>
            <h3>List request</h3>
            <Card />
        </div>
    );
};

export default TutorRequest;
