import { useState, useEffect } from 'react';
import axios from 'axios';

import Debts from './Debts';
import CurrentMonth from './CurrentMonth';

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
            <CurrentMonth />
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
        </div>
    );
};

export default DebtsList;
