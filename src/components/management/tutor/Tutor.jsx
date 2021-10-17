import React, { useState, useEffect } from "react";
import "./style.scss";
import axios from "axios";
import "./trump.jpg"

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
    const [tutor, setTutor] = useState([]);
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        try {
            axios
                .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutors")
                .then((response) => {
                    setTutor(response.data.data);

                });
        } catch (error) {
            console.log(error);
        }
    }, []);




    return (
        <div>

            {tutor.map((item, id) => {
                return [
                    <div className="card">
                        <img src="./trump.jpg" width="70" height="70" alt="Tutor image" />
                        <div className="p">
                            <h3>{item.fullName}</h3>
                            <p >
                                {item.email}<br />
                                {item.phoneNumber}
                            </p>
                        </div>
                        <div>

                        </div>

                    <button type="button" className="btn">View all</button>
                    </div>
                ]
            })}

        </div>

    );
};

const Tutor = () => {
    return (
        <div>
            <Card />
        </div>
    );
};

export default Tutor;
