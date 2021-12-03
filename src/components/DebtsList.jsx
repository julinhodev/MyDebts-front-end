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
        <div className="debtlist-container">
            <table className="debtlist-table">
                    <thead>
                        <tr>
                            <th className="debtlist-th debtlist-description" >Descrição</th>
                            <th className="debtlist-th" >Valor</th>
                            <th className="debtlist-th" >Parcelas</th>
                            {/* <th className="debtlist-th" >Data</th> */}
                            <th className="debtlist-th" >Opções</th>
                            <th className="debtlist-th" >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            { debts.map(debt => !debt.paymentStatus ? <Debts key={debt._id} debts={debt} colorIcons="#ee4035"/> : null)}
                        </tr>
                        <tr>
                            { debts.map(debt => debt.paymentStatus ? <Debts key={debt._id} debts={debt} colorIcons="#7bc043"/> : null)}
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};

export default DebtsList;