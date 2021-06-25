import React, { useState } from 'react'

const data = {
    ins: '',
    idv: ''
}

function Insurence() {
    const [details, setDetails] = useState(data);
    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'ins':
                setDetails({ ...details, ins: value });
                break;
            case 'idv':
                setDetails({ ...details, idv: value });
                break;
        }
    }
    return (
        <div className="container">
            <label className="form-label">Insurence Co. Name & Policy/cover note no.</label>
            <input type="text" name="ins" className="form-control" placeholder="enter policy/cover note no." value={details.ins} onChange={onChange} />
            <label className="form-label">I.D.V and insured period.</label>
            <input type="text" name="idv" className="form-control" placeholder="enter i.d.v and insured period here" value={details.idv} onChange={onChange} />
        </div>
    )
}

export default Insurence
