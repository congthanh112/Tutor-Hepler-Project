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

const SubjectList = (id) => {
    
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                if (id.id == "all") {
                    console.log("id", id.id)
                    await axios
                        .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/subjects", {
                            params: {
                                PageSize: 100
                            }
                        })
                        .then((response) => {
                            setResult(response.data.data)
                        });
                } else {                  
                    await axios
                        .get(`https://tutorhelper20210920193710.azurewebsites.net/api/v1/grades/${id.id}`)
                        .then((response) => {
                            //setResult(response.data)
                            console.log("RRRRRR",response.data);
                        });
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, [id])


    return (
        <div className="col-4" style={{ marginTop: 25 }}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Subject Name</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, id) => {
                        return [
                            <tr>
                                <td>{id + 1}</td>
                                <td>{item.subjectName}</td>                            
                            </tr>
                        ]
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SubjectList