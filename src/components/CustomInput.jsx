import './CustomInput.scss';

const CustomInput = ({label, value, type, onChange}) => {

    return(
        <div className="custom-input-container">
            <input type={type} className="custom-input" onChange={e => onChange(e)} value={value}/>
            { label ? <label className={`${value ? 'shrink' : ""} custom-input-label `} >{label}</label> : null }
        </div>
    );
};

export default CustomInput; 