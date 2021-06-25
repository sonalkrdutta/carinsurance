import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
const details = {
    regno: '',
    owner: '',
    address: ''
}

function OwnershipDetails() {
    const [detail, setDetail] = useState(details);
    const history = useHistory();
    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'regNo':
                setDetail({ ...detail, regno: value });
                break;
            case 'ownerName':
                setDetail({ ...detail, owner: value });
                break;
            case 'ownerAddress':
                setDetail({ ...detail, address: value });
                break;
        }
    }
    function Submit() {
        localStorage.setItem('regno', detail.regno);
        localStorage.setItem('ownerName', detail.owner);
        localStorage.setItem('address', detail.address);
        history.push('assetdetails');
    }
    return (
        <div className="container">
            <label className="form-label">Registration No.</label>
            <input name="regNo" className="form-control" placeholder="enter Registration no." value={detail.regno} onChange={onChange} />
            <label className="form-label">Name of the Original Owner.</label>
            <input name="ownerName" className="form-control" placeholder="enter Owner name" value={detail.owner} onChange={onChange} />
            <label className="form-label">Address of Original Owner.</label>
            <input name="ownerAddress" className="form-control" placeholder="enter Owner name" value={detail.address} onChange={onChange} />
            <button className="btn btn-info" onClick={Submit}>Go to Asset details</button>
        </div>
    )
}

export default OwnershipDetails
