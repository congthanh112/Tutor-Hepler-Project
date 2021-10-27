import React, { useState, useEffect } from "react";
import "./tutor.scss";
import axios from "axios";
import Card from "./Card";
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
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultPerPage, setResultPerPage] = useState(9);

    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutors", {
                        params: {
                            PageNume: currentPage,
                            PageSize: 100
                        }
                    })
                    .then((response) => {
                        setTutor(response.data.data);
                        console.log(response.data.data)
                        setLoading(false);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }, []);

    //Get current result
    const indexOfLastResult = currentPage * resultPerPage;
    const indexOfFirstResult = indexOfLastResult - resultPerPage;
    const currentResult = tutor.slice(indexOfFirstResult, indexOfLastResult);

    //Change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <Card result={currentResult} loading={loading}/>
            <Pagination resultPerPage={resultPerPage} totalResult={tutor.length} paginate={paginate} />
        </div>
    )
};

export default Tutor;

