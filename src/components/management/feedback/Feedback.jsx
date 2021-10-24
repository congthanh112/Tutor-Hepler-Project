import React, { useState, useEffect } from "react";
import "./feedback.scss";
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
    const [feedback, setFeedback] = useState([]);
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        try {
            axios
                .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/feedbacks")
                .then((response) => {
                    setFeedback(response.data.data);

                });
        } catch (error) {
            console.log(error);
        }
    }, []);




    return (
        <div className="col-10">
            <table className="table table-bordered" border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Create Date</th>
                    </tr>
                </thead>
                {feedback.map((item, id) => {
                    return [

                        <tr>
                            <td>{id}</td>
                            <td>
                                <p>
                                    <h3>{item.title}</h3>
                                    {item.feedbackContent}
                                </p>

                            </td>
                            <td>{item.studentId}</td>
                            <td>{item.ratingScorce}</td>
                            <td>{item.createAt}</td>
                        </tr>

                    ]
                })}
            </table>
        </div>

    );
};

const Feedback = () => {
    return (
        <div>
            <Card />
        </div>
    );
};

export default Feedback;
