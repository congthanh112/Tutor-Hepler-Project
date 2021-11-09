import React, { useState, useEffect } from "react";
import "./tutor-request.scss";
import axios from "axios";
import GetAuthor from './GetAuthor';
import Status from "./Status";
import Action from "./Action";

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const TutorRequest = () => {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        setRequest(response.data.data);
                        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRR",response.data.data)
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, []);

    return (
        <div className="col-12">
            <table className="table table-bordered" border="2">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Create Date</th>
                        <th>Processed Date</th>
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
                                        <h6>{item.title}</h6>
                                        {item.description}
                                    </p>
                                    <a href="#" className="link">view all</a>
                                </td>
                                <td><GetAuthor id={item.studentId}/></td>
                                <td>{item.createAt}</td>
                                <td>{item.createAt}</td>
                                <td><Status status={item.status}/></td>
                                <td><Action requestUpdate={item}/></td>
                            </tr>
                        ]
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TutorRequest;
