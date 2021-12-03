import { useState, useEffect } from 'react';
import axios from 'axios';

import Debts from './Debts';

import './DebtsList.scss';

const DebtsList = () => {
    const [debts, setDebt] = useState([]);

    const fetchDebts = async () => {
        const { data } = await axios.get('http://localhost/debts');
        setDebt(data)
    };

    useEffect(() => fetchDebts(), []);

    return(
        <div>
            <div className="debtlist-container">
                { debts.map(debt => !debt.paymentStatus ? <Debts key={debt._id} debts={debt} colorIcons="#ee4035"/> : null)}
                { debts.map(debt => debt.paymentStatus ? <Debts key={debt._id} debts={debt} colorIcons="#7bc043"/> : null)}
            </div>
        </div>
    );
};

export default DebtsList;