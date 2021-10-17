import React, { useState, useEffect } from "react";
import "./style.scss";

import tutorRequestApi from "../../../api/tutorRequestApi";
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
  const [request, setRequest] = useState([]);
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    try {
      axios
        .get(
          "https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests"
        )
        .then((response) => {

          console.log(response.data.data);
          setRequest(response.data.data);

        });
    } catch (error) {
      console.log("Error");
    }
  }, []);



  return (
    <div className="col-11">
      <table border="1">
        <tr>
          <th>No.</th>
          <th>Content</th>
          <th>Author</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {request.map((item, id) => {
          return [
            <tr>         
                <td>{id}</td>
                <td>
                  <p> 
                    <h3>{item.title}</h3>
                    {item.description}
                    </p>
                  <a href="#" className="link">view all</a>
                </td>
                <td>{item.studentId}</td>
                <td className="text">Pending</td>
                <td className="action">
                  <button type="button" className="approve" >
                    Approve
                  </button>
                  <button type="button" className="reject" >
                    Reject
                  </button>
                </td>         
            </tr>
          ]
        })}
      </table>
    </div>
  );
};

const TutorRequest = () => {
  return (
    <div>
      <h3>List request</h3>
      <Card />
    </div>
  );
};

export default TutorRequest;
