import { borderRadius } from "@mui/system";
import React from "react";

const Status = (status) => {
    if (status.status == "Pending") {
        return <div style={{ color: '#3300bf' }}>Pending</div>
    } else if (status.status == "Approved") {
        return <div style={{ color: '#00a32c' }}>Approved</div>
    } else if (status.status == "Rejected") {
        return <div style={{ color: '#00a32c' }}>Rejected</div>
    } else if (status.status == "Accepted") {
        return <div style={{ color: '#000' }}>Accepted</div>
    } else if (status.status == "Deleted"){
        return <div style={{ color: '#8a8a8a' }}>Deleted</div>
    }
}

export default Status