import './DebtsSum.scss';
import BRLFormat from '../model/BRLFormat';

const DebtsSum = ({description, value}) => {
    const calcValue = value.reduce(( previosValue, currentValue ) => previosValue += currentValue, 0);
    const formatValue = BRLFormat(calcValue);
    return(
        <div className="debtsum-container">
            <span> {`${description} ${formatValue}`}</span>
        </div>
    );
}

export default DebtsSum;