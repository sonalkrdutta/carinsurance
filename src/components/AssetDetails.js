import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
const data = {
    manufacName: '',
    model: '',
    bodytype: '',
    yearofmanu: '',
    engine: '',
    chassis: '',
    kilometer: ''
}
function AssetDetails() {
    const [details, setDetails] = useState(data);
    const history = useHistory();
    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'manufacName':
                setDetails({ ...details, manufacName: value });
                break;
            case 'model':
                setDetails({ ...details, model: value });
                break;
            case 'bodytype':
                setDetails({ ...details, bodytype: value });
                break;
            case 'yearofmanu':
                setDetails({ ...details, yearofmanu: value });
                break;
            case 'engine':
                setDetails({ ...details, engine: value });
                break;
            case 'chassis':
                setDetails({ ...details, chassis: value });
                break;
            case 'kilometer':
                setDetails({ ...details, kilometer: value });
                break;
        }
    }
    function submit() {
        localStorage.setItem('manufacName', details.manufacName);
        localStorage.setItem('model', details.model);
        localStorage.setItem('bodytype', details.bodytype);
        localStorage.setItem('yearofmanu', details.yearofmanu);
        localStorage.setItem('engine', details.engine);
        localStorage.setItem('chassis', details.chassis);
        localStorage.setItem('kilometer', details.kilometer);
        history.push('insurance');
    }
    return (
        <div className="container">
            <label className="form-label">Manufacturer's name</label>
            <input name="manufacName" type="text" className="form-control" placeholder="Enter Manufacturer's name here.." value={details.manufacName} onChange={onChange} />
            <label className="form-label">Model</label>
            <input name="model" type="text" className="form-control" placeholder="Enter model name here.." value={details.model} onChange={onChange} />
            <label className="form-label">Body type</label>
            <input name="bodytype" type="text" className="form-control" placeholder="Enter body type here.." value={details.bodytype} onChange={onChange} />
            <label className="form-label">Year of Manufacture</label>
            <input name="yearofmanu" type="number" className="form-control" placeholder="Enter year of Manufacture here.." value={details.yearofmanu} onChange={onChange} />
            <label className="form-label">Engine no.</label>
            <input name="engine" type="text" className="form-control" placeholder="Enter engine no. here.." value={details.engine} onChange={onChange} />
            <label className="form-label">Chassis no.</label>
            <input name="chassis" type="text" className="form-control" placeholder="Enter chassis no. here.." value={details.chassis} onChange={onChange} />
            <label className="form-label">Kilometer reading</label>
            <input name="kilometer" type="number" className="form-control" placeholder="Enter kilometer here.." value={details.kilometer} onChange={onChange} />
            <button className="btn btn-info" onClick={submit}>go to Insurance page</button>
        </div>
    )
}

export default AssetDetails
