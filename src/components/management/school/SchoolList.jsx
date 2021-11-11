import React, { useState, useEffect } from 'react';
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

const SchoolList = (id) => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                if (id.id == "all") {
                    await axios
                        .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/schools", {
                            params: {
                                PageSize: 100
                            }
                        })
                        .then((response) => {
                            setResult(response.data.data)
                        });
                } else {
                    await axios
                        .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/areas/${id.id}`)
                        .then((response) => {
                            setResult(response.data.schools)
                            console.log(response.data)
                        });
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, [id])


    return (
        <div className="col-11" style={{ marginTop: 25 }}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>School</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, id) => {
                        return [
                            <tr>
                                <td>{id + 1}</td>
                                <td> {item.schoolLevel == 12 ? "Trung hoc Pho thong" : "Trung hoc Co so"} {item.schoolName}</td>
                                <td>{item.address}</td>                              
                            </tr>
                        ]
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SchoolList