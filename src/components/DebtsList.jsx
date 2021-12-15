import { useState, useEffect } from 'react';
import { RiPlayListAddLine } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Debts from './Debts';
import CurrentMonth from './CurrentMonth';
import CustomButton from './CustomButton';
import DebtsSum from './DebtsSum';

import './DebtsList.scss';

const DebtsList = () => {
    const [debts, setDebt] = useState([]);

    const navigate = useNavigate();

    const fetchDebts = async () => {
        const { data } = await axios.get('http://localhost/debts');
        setDebt(data);
    };

    const handleAddList = () => {
        navigate('/add');
    };

    useEffect(() => fetchDebts(), []);

    return(
        <div className="debtlist-container">  
            <div className="debtlist-button" >
                <CustomButton firstDescription={<RiPlayListAddLine size={20} color="#232526"/>} onClick={handleAddList} />
                <CurrentMonth/>
            </div> 
            <div className="last-debts">
                <div className="debts-list">
                    {debts.map(debt => !debt.paymentStatus ? <Debts key={debt._id} debts={debt} fetchDebts={fetchDebts}/> : null)}
                </div>
            </div>
            <div className="debts-pay">
                <div className="debts-list">
                    {debts.map(debt => debt.paymentStatus ? <Debts key={debt._id} debts={debt} fetchDebts={fetchDebts}/> : null)}
                </div>   
            </div>
            <div className="debtssum-container">
                <span className="debtssum-pay">
                    {<DebtsSum description="Total pago:" value={debts.filter(debt => debt.paymentStatus).map(debt => debt.value)}/>}
                </span>  
                <span className="debtssum-notpay">
                    {<DebtsSum description="Total a pagar:" value={debts.filter(debt => !debt.paymentStatus).map(debt => debt.value)}/>}
                </span>  
            </div>
        </div>
    );
};

export default DebtsList;