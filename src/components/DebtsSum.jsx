import './DebtsSum.scss';

const DebtsSum = ({description, value}) => {
    const calcValue = value.reduce(( previosValue, currentValue ) => previosValue += currentValue, 0);
    return(
        <div className="debtsum-container">
            <span> {`${description} ${calcValue.toFixed(2).replace('.', ',')}`}</span>
        </div>
    );
}

export default DebtsSum;