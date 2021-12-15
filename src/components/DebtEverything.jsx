import './DebtEverything';

const DebtEverything = ({Everything}) => {
    return(
        <div className="Everything-container">
            {Everything.description}
            {Everything.value}
        </div>
    );
};

export default DebtEverything;