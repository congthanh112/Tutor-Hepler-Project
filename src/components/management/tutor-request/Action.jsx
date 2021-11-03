import React, { useState, useEffect } from 'react';
import "./tutor-request.scss"
import axios from "axios";
import Moment from 'react-moment';

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const Action = (requestUpdate) => {

    const [status, setStatus] = useState();

    useEffect(() => {

    }, [status])
    const OnChangeStatus = (tutorRequest, newStatus) => {
        try {
            axios.put("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests", {
                "tutorRequestId": tutorRequest.tutorRequestId,
                "title": tutorRequest.title,
                "description": tutorRequest.description,
                "status": newStatus,
                "studentId": tutorRequest.studentId,
                "subjectId": tutorRequest.subjectId,
                "gradeId": tutorRequest.gradeId,
                "createAt": tutorRequest.createAt,
                "updateAt": null
            })
            .then(() => setStatus(newStatus))
        } catch (error) {
            console.log(error);
        }
    }

    if (requestUpdate.requestUpdate.status == "Pending") {
        return (
            <div className="action">
                <button type="button" className="approve" onClick={() => OnChangeStatus(requestUpdate.requestUpdate, "Approved")}>
                    <b>Approve</b>
                </button>
                <button type="button" className="reject" onClick={() => OnChangeStatus(requestUpdate.requestUpdate, "Rejected")}>
                    <b>Reject</b>
                </button>
            </div>
        )
    } else if (requestUpdate.requestUpdate.status == "Approved") {
        return (
            <div className="action">
                <button type="button" className="delete" onClick={() => OnChangeStatus(requestUpdate.requestUpdate, "Deleted")}>
                    <b>Delete</b>
                </button>
            </div>
        )
    } else if (requestUpdate.requestUpdate.status == "Rejected") {
        return <div></div>
    } else if (requestUpdate.requestUpdate.status == "Accepted") {
        return (
            <div className="action">
                <button className="delete">
                    <b>Delete</b>
                </button>
            </div>
        )
    } else if (requestUpdate.requestUpdate.status == "Deleted") {
        return <div></div>
    }

}



export default Action