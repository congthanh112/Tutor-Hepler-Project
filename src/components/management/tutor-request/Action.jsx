import React, {usetState, useEffect} from 'react';
import "./tutor-request.scss"
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

const Action = ({id, status}) => {

    // useEffect(() => {
    //     const fetchRequest = async () => {
    //         try {
    //             await axios
    //                 .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests/${id}`)
    //                 .then((response) => {
    //                     axios.put

    //                 });

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchRequest();
    // }, []);



return <div>a</div>
    // if (status.status == "Pending") {
    //     return (
    //         <div className="action">
    //             <button type="button" className="approve" >
    //                 Approve
    //             </button>
    //             <button type="button" className="reject" >
    //                 Reject
    //             </button>
    //         </div>
    //     )
    // } else if (status.status == "Approved") {
    //     return (
    //         <div className="action">
    //             <button type="button" className="delete" >
    //                 Delete
    //             </button>
    //         </div>
    //     )
    // } else if(status.status == "Rejected") {
    //     return <div style={{ color: '#ff0000' }}>Reject</div>
    // }




}

export default Action