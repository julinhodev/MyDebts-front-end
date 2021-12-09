import './DebtsSum.scss';
import BRLFormat from '../model/BRLFormat';

const DebtsSum = ({description, value}) => {
    const calcValue = value.reduce(( previosValue, currentValue ) => previosValue += currentValue, 0);
    return(
        <div className="debtsum-container">
            <span> {`${description} ${BRLFormat(calcValue)}`}</span>
        </div>
    );
}

export default DebtsSum;