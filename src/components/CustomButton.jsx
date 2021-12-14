import './CustomButton.scss'

const CustomButton = ({ firstDescription, lastDescription, onClick }) => {
    return(
        <div className="button-constainer" onClick={onClick} >
            {lastDescription ? <span><span>{firstDescription}</span> <span>{lastDescription}</span></span> : <span>{firstDescription}</span>} 
        </div>
    );
};

export default CustomButton;