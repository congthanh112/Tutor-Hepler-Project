import React, { useState } from 'react'
import "./style.scss"
import axios from 'axios';


const GetListRequest = () => {
    const [request, setRequest] = useState([]);
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
    axios.get(`${process.env.REACT_APP_API_URL}/tutor-requests`)
        .then(res => {
            setRequest(res.data);
            console.log("AAAAAA"+request)
        })
        .catch(error => console.log(error));

}


const Card = () => {
    console.log("AAAAAAAAA" + GetListRequest)
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