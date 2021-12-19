import './CustomInput.scss';

import { useState } from 'react';

const CustomInput = ({label, value, type, onChange}) => {
    const [valueInput, setValueInput] = useState(value);

    const handleOnchange = (e) => {
        setValueInput(e.target.value)
        return onChange(e)
    };

    return(
        <div className="custom-input-container">
            <input type={type} className="custom-input" onChange={e => handleOnchange(e)} value={valueInput}/>
            { label ? <label className={`${value ? 'shrink' : ""} custom-input-label `} >{label}</label> : null }
        </div>
    );
};

export default CustomInput; 