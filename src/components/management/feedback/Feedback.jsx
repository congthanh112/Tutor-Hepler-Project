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
        <div>

            {feedback.map((item, id) => {
                return [
                    <div className="card">               
                        <div className="p">
                            <h3>{item.fullName}</h3>
                            <p >
                                {item.email}<br />
                                {item.phoneNumber}
                            </p>
                        </div>
                        <div>

                        </div>

                    <a href="#" className="link">View all</a>
                    </div>
                ]
            })}

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
