import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { RiPlayListAddFill } from 'react-icons/ri';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';

import Debts from './Debts';
import CurrentMonth from './CurrentMonth';
import CustomButton from './CustomButton';
import DebtsSum from './DebtsSum';

import './DebtsList.scss';

const DebtsList = () => {
    const [debts, setDebt] = useState([]);
    const navigate = useNavigate();
    const alert = useAlert();

    const fetchDebts = useCallback(async () => {
        try{
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/debts`);
            setDebt(data);
       }catch(_error){
            console.log('Não foi possível recuperar as dívidas :(');
       }
    }, []);

    const handleAddList = () => navigate('/add');
    const useMemoDebtsNotPay = useMemo(() => debts.filter(debt => !debt.paymentStatus), [debts]);
    const useMemoDebtsPay = useMemo(() => debts.filter(debt => debt.paymentStatus), [debts]);
    useEffect(() => fetchDebts(), [fetchDebts]);

    return(
        <div className="debtlist-container">  
            <div className="debtlist-button" >
                <CustomButton firstDescription={<RiPlayListAddFill size={20} color="#FFF"/>} onClick={handleAddList} />
                <CurrentMonth/>
                <div className="debtlist-button-month">
                    <span><CustomButton firstDescription={<HiChevronDoubleLeft size={20} color="#FFF"/>} onClick={() => alert.error('Ainda não é possível voltar o mês!')} /></span>
                    <span><CustomButton firstDescription={<HiChevronDoubleRight size={20} color="#FFF"/>} onClick={() => alert.error('Ainda não é possível avaçar o mês!')} /></span>
                </div>
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
                    {<DebtsSum description="Total pago:" value={useMemoDebtsPay.map(debt => debt.value)}/>}
                </span>  
                <span className="debtssum-notpay">
                    {<DebtsSum description="Total a pagar:" value={useMemoDebtsNotPay.map(debt => debt.value)}/>}
                </span>  
            </div>
        </div>
    );
};

export default DebtsList;