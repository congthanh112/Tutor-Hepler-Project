import React, { useEffect } from 'react'
import CountPendingRequest from './CountPendingRequest'
import CountTotalRequest from './CountTotalRequest'
import CountTotalStudent from './CountTotalStudent'
import CountTotalTutor from './CountTotalTutor'
import "./dashboard.scss"
const Dashboard = () => {

    return (
        <div className="main">
            <span className="totalRequest">
                <h3>Total Request</h3>
                <CountTotalRequest/>
            </span>
            <span className="totalTutor">
            <h3>Total Tutor</h3>
                <CountTotalTutor/>
            </span>
            <span className="totalStudent">
            <h3>Total Student</h3>
                <CountTotalStudent/>
            </span>
            <span className="totalPending">
            <h3>Request pending</h3>
                <CountPendingRequest/>
            </span>
        </div>
    )
}


export default Dashboard
