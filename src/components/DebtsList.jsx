import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiPlayListAddLine } from 'react-icons/ri'

import Debts from './Debts';
import CurrentMonth from './CurrentMonth';
import CustomButton from './CustomButton';

import './DebtsList.scss';

const DebtsList = () => {
    const [debts, setDebt] = useState([]);

    const fetchDebts = async () => {
        const { data } = await axios.get('http://localhost/debts');
        setDebt(data)
    };

    useEffect(() => fetchDebts(), []);

    return(
        <div className="debtlist-container">
            <div className="debtlist-button" >
                <CustomButton value={<RiPlayListAddLine size={22} color="#232526"/>} />
                <CurrentMonth />
            </div> 
            <div className="last-debts">
                <div className="debts-list">
                    { debts.map(debt => !debt.paymentStatus ? <Debts key={debt._id} debts={debt} fetchDebts={fetchDebts}/> : null)}
                </div>
            </div>
            <div className="debts-pay">
                <div className="debts-list">
                    { debts.map(debt => debt.paymentStatus ? <Debts key={debt._id} debts={debt} fetchDebts={fetchDebts}/> : null)}
                </div>   
            </div>
            <div className="debts-sum">
                   <span> Total a pagar: R$ { debts.reduce(( previosValue, currentValue ) => { return  previosValue += currentValue.value }, 0).toFixed(2) }</span>
            </div>
        </div>
    );
};

export default DebtsList;
