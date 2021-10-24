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


    // return (
    //     <div>
    //         {tutor.map((item, id) => {
    //             return [
    //                 <table border="1">
    //                     <thead>
    //                     <tr>
    //                         <th>No.</th>
    //                         <th>Infor</th>
    //                         <th>Image</th>
    //                         <th></th>
    //                     </tr>
    //                     </thead>
    //                     <tbody>
    //                     <tr>
    //                         <td>{id}</td>
    //                         <td>
    //                             {item.fullName}<br/>
    //                             {item.email}<br/>
    //                             {item.phoneNumber}
    //                         </td>
    //                         <td>
    //                             <img src={item.imagePath} width="70" height="70" alt="Tutor image" />
    //                         </td>
    //                     </tr>
    //                     </tbody>
    //                 </table>
    //             ]
    //         })}
    //     </div>
    // );

};

export default Tutor;
