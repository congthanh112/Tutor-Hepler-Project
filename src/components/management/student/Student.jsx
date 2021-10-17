import React, { useState, useEffect } from "react";
import "./style.scss";
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
    const [student, setStudent] = useState([]);
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        try {
            axios
                .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/students")
                .then((response) => {
                    setStudent(response.data.data);

                });
        } catch (error) {
            console.log(error);
        }
    }, []);




    return (
        <div>

            {student.map((item, id) => {
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

const Student = () => {
    return (
        <div>
            <Card />
        </div>
    );
};

export default Student;
