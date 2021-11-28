const Debts = ({ debts }) => {
    return(
        <div className="debts-container">
           <p>{ debts.description }</p>
        </div>
    );
};

export default Debts;