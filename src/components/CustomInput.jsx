import './CustomInput.scss';

const CustomInput = ({label, value, type}) => {
    return(
        <div className="custom-input-container">
            <input type={type} className="custom-input"/>
            { label ? <label className={`${value.length > 0 ? 'shrink' : ""} custom-input-label `} >{label}</label> : null }
        </div>
    );
};

export default CustomInput;