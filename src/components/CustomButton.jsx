import './CustomButton.scss'

const CustomButton = ({ firstDescription, lastDescription }) => {
    return(
        <div className="button-constainer">
            {lastDescription ? <span><span>{firstDescription}</span> <span>{lastDescription}</span></span> : <span>{firstDescription}</span>} 
        </div>
    );
};

export default CustomButton;