import './CustomInput.scss';

const CustomInput = ({label, value, type, onChange}) => {
    return(
        <div className="custom-input-container">
            <input type={type} className="custom-input" onChange={e => onChange(e)}/>
            { label ? <label className={`${value.length > 0 ? 'shrink' : ""} custom-input-label `} >{label}</label> : null }
        </div>
    );
};

export default CustomInput;