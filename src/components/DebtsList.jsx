import { useState, useEffect } from 'react';
import axios from 'axios';

//import { router } from '../router/routers';

const DebtsList = () => {
    const [debts, setDebt] = useState([]);

    const fetchDebts = async () => {
        const { data } = await axios.get('http://localhost/debts');
        setDebt(data);
    };

    useEffect(() => fetchDebts(), []);

    return(
        <div className="debtlist-container">
            <p>Debt List</p>
        </div>
    );
};

export default DebtsList;