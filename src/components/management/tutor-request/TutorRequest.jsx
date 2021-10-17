import React, { useState, useEffect } from 'react'
import "./style.scss"

import tutorRequestApi from '../../../api/tutorRequestApi';
import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

const GetListRequest = () => {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const fetchRequest = () => {
            //const response = tutorRequestApi.getAll();
            const response = axios.get("​​https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests")
            setRequest(response.data);
            console.log("AAAAAAAAA"   + response);
        };
        fetchRequest();
    }, []);
    // return fetch(`${process.env.REACT_APP_API_URL}/tutor-requests`, {
    //     method: "GET",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then(response => {
    //         return response.json();

    //     })
    //     .catch(err => console.log(err));
    // axios.get(`${process.env.REACT_APP_API_URL}/tutor-requests`)
    //     .then(res => {
    //         setRequest(res.data);
    //         console.log("AAAAAA" + request)
    //     })
    //     .catch(error => console.log(error));

}


const Card = () => {
    GetListRequest();
    return (
        <div className="col-11">
            <table border="1">
                <tr>
                    <th>No.</th>
                    <th>Content</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum est sit amet urna suscipit, eu ornare arcu suscipit.
                            Morbi leo nunc, placerat non sem id, volutpat dignissim lectus. Cras hendrerit eget quam quis porttitor. Fusce ultricies ligula at congue ultricies.

                        </p>
                        <a href="#">view all</a>
                    </td>
                    <td className="text">Pending</td>
                    <td className="action">
                        <button type="button" className="approve">Approve</button>
                        <button type="button" className="reject">Reject</button>
                    </td>
                </tr>

            </table>
        </div>
    )
}
const TutorRequest = () => {
    return (
        <div>
            <h3>List request</h3>
            <Card />

        </div>
    )
}

export default TutorRequest;