import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { 
     HiAnnotation,
     HiOutlineCalendar,
     HiEmojiHappy,
     HiEmojiSad
     } from "react-icons/hi";

import './DebtEverything.scss';
import BRLFormat from '../model/BRLFormat';
import BtnHome from './BtnHome';
import CurrentMonth from '../components/CurrentMonth'

const DebtEverything = ({id}) => {

    const alert = useAlert();

    const [debtEverything, setDebtEverything] = useState('');
    const [debtValue, setDebtValue] = useState('');
    const [debtDate, setDebtDate] = useState('');
    const [debtPaymentStatus, setDebtPaymetStatus] = useState('');

    //Date
    const handleDate = date => date < 10 ? `0${date}` : date;
    const date = new Date(debtDate);
    const dateDay = date.getDate() + 1;
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();
    const fullDate = `${handleDate(dateDay)}/${handleDate(dateMonth)}/${handleDate(dateYear)}`;

    const handleGetOneDebt = async () => {
        try{
            const { data } = await axios.get(`http://localhost/debts/${id.id}`);
            setDebtEverything(data.everything);
            setDebtValue(data.value);
            setDebtDate(data.date);
            setDebtPaymetStatus(data.paymentStatus);
        } catch(_error) {
            alert('Não foi possível carregar os detalhes!');
        }
    };

    useEffect(() => handleGetOneDebt());

    return(
        <div className="everything-container">
            <div className="everything-header">
                <CurrentMonth description="Estamos no mês de" />
                <BtnHome />
            </div>
            <div className='everything-date' >
                <HiOutlineCalendar size={25} color="#0090FF"/>
                <p>{fullDate}</p>
            </div>
            <div className='everything-paymentStatus' >
                {debtPaymentStatus ? 
                    <HiEmojiHappy size={25} color="#0090FF"/>
                    :
                    <HiEmojiSad size={25} color="#0090FF"/>
                }
                <p>{debtPaymentStatus ? 'Pago!' : 'Não pago!'}</p>
            </div>
            <div className='everything-value' >
                {debtPaymentStatus ? 
                    <GiPayMoney size={25} color="#0090FF"/>
                    :
                    <GiReceiveMoney size={25} color="#0090FF"/>
                }
                <p>{BRLFormat(debtValue)}</p>
            </div>
            <div className='everything-everything' >
                <HiAnnotation size={25} color="#0090FF"/>
                <p>{debtEverything}</p>
            </div>
        </div>
    );
};

export default DebtEverything;