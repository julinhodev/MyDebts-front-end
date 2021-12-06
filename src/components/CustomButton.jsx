import './CustomButton.scss'

const CustomButton = ({ value }) => {
    return(
        <div className="button-constainer">
            <span>{value}</span>
        </div>
    );
};

export default CustomButton;