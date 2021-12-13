import { useState, useEffect } from 'react';
import { RiPlayListAddLine, RiAddBoxFill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

import Debts from './Debts';
import CurrentMonth from './CurrentMonth';
import CustomButton from './CustomButton';
import DebtsSum from './DebtsSum';
import AddAndEditDebt from './AddAndEditDebt';



import './DebtsList.scss';

const DebtsList = () => {
    const [debts, setDebt] = useState([]);

    const fetchDebts = async () => {
        const { data } = await axios.get('http://localhost/debts');
        setDebt(data);
    };

    useEffect(() => fetchDebts(), []);

    return(
        <div className="debtlist-container">
{/*                 <AddAndEditDebt icon={<RiAddBoxFill size={20} color="#232526"/> } lastDescription="Adicionar" title="Adicionar dívida" /> 
                <AddAndEditDebt icon={<FaEdit size={20} color="#232526"/> } lastDescription="Editar" title="Editar dívida" />  */}
            <div className="debtlist-button" >
                <CustomButton firstDescription={<RiPlayListAddLine size={20} color="#232526"/>}/>
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