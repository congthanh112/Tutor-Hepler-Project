import { borderRadius } from "@mui/system";
import React from "react";

const Status = (status) => {
    if (status.status == "Pending") {
        return <div style={{ color: '#3300bf'}}>Pending</div>
    } else if (status.status == "Approved") {
        return <div style={{ color: '#00a32c'}}>Approve</div>
    } else {
        return <div style={{ color: '#ff0000'}}>Reject</div>
    }
}

export default Status