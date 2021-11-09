import React, {useState, useEffect} from 'react';
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

const Subject = () => {
    const [listSubject, setListSubject] = useState([]);
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await axios
                    .get("https://tutorhelper20210920193710.azurewebsites.net/api/v1/subjects", {
                        params: {
                            PageSize: 100,
                        }
                    })
                    .then((response) => {
                        setListSubject(response.data.data)
                    });

            } catch (error) {
                console.log(error);
            }
        }
        fetchRequest();
    }, [])

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
                    {listSubject.map((item, id) => {
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

    );
};

export default Subject