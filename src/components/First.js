import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
const data = {
    repNo: '',
    token: 0,
    irda: '',
    inspection: '',
    expiry: '',
    place: '',
    branch: '',
    servey: '',
    date: ''

}
function Page() {
    const [datas, setdatas] = useState(data);
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'repNo':
                setdatas({ ...datas, repNo: value });
                break;
            case 'token':
                setdatas({ ...datas, token: value });
                break;
            case 'irda':
                setdatas({ ...datas, irda: value });
                break;
            case 'inspection':
                setdatas({ ...datas, inspection: value });
                break;
            case 'expiry':
                setdatas({ ...datas, expiry: value });
                break;
            case 'date':
                setdatas({ ...datas, date: value });
                break;
            case 'place':
                setdatas({ ...datas, place: value });
                break;
            case 'branch':
                setdatas({ ...datas, branch: value });
                break;
            case 'servey':
                setdatas({ ...datas, servey: value });
                break;
        }
    }
    function onSubmit() {

        localStorage.setItem('repNo', datas.repNo);
        localStorage.setItem('token', datas.token);
        localStorage.setItem('irda', datas.irda);
        localStorage.setItem('expiry', datas.expiry);
        localStorage.setItem('placeofins', datas.place);
        localStorage.setItem('branch', datas.branch);
        localStorage.setItem('servey', datas.servey);
        localStorage.setItem('inspection', datas.inspection);
        localStorage.setItem('date', datas.date);
        history.push('ownerdetails');
    }
    return (
        <div className="container">
            <label className="form-label">REP NO.</label>
            <input type="text" name="repNo" className="form-control" placeholder="enter rep no." value={datas.repNo} onChange={handleChange} />
            <label>Date</label>
            <input type="date" name="date" className="form-control" value={datas.date} onChange={handleChange} />
            <label className="form-label">Token no.</label>
            <input type="number" name="token" className="form-control" placeholder="enter number" value={datas.token} onChange={handleChange} />
            <label className="form-label">IRDA Certificate</label>
            <input type="text" name="irda" className="form-control" placeholder="enter certificate number" value={datas.irda} onChange={handleChange} />
            <label className="form-label">Date of Inspection</label>
            <input type="date" name="inspection" className="form-control" value={datas.inspection} onChange={handleChange} />
            <label className="form-label">Expiry Date</label>
            <input type="date" name="expiry" className="form-control" value={datas.expiry} onChange={handleChange} />
            <label className="form-label">Place of inspection</label>
            <input type="text" name="place" className="form-control" placeholder="enter place" value={datas.place} onChange={handleChange} />
            <label className="form-label">Branch</label>
            <input type="text" name="branch" className="form-control" placeholder="enter branch name" value={datas.branch} onChange={handleChange} />
            <label className="form-label">Servey in the presence of (driver or customer)</label>
            <select class="form-select" name="servey" aria-label="Default select example" value={datas.servey} onChange={handleChange}>
                <option value="" selected>Select Option</option>
                <option value="driver">Driver</option>
                <option value="customer">Customer</option>
            </select>
            <button className="btn btn-info" onClick={onSubmit}>go to OwnershipDetails</button>
        </div>
    )
}

export default Page
