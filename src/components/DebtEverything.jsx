import './DebtEverything.scss';
import CurrentMonth from '../components/CurrentMonth'
import BRLFormat from '../model/BRLFormat';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { 
     HiAnnotation,
     HiOutlineCalendar,
     HiEmojiHappy,
     HiEmojiSad
     } from "react-icons/hi"
import axios from 'axios';
import { useState, useEffect } from 'react';
import BtnHome from './BtnHome';

const DebtEverything = ({id}) => {
    const handleDate = date => date < 10 ? `0${date}` : date;

    const [debtEverything, setDebtEverything] = useState('');
    const [debtValue, setDebtValue] = useState('');
    const [debtDate, setDebtDate] = useState('');
    const [debtPaymentStatus, setDebtPaymetStatus] = useState('');

    const date = new Date(debtDate);
    const dateDay = date.getDate() + 1;
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();
    const fullDate = `${handleDate(dateDay)}/${handleDate(dateMonth)}/${handleDate(dateYear)}`;
    
    
    useEffect(() => handleGetOneDebt());

    const handleGetOneDebt = async () => {
        try{
            const { data } = await axios.get(`http://localhost/debts/${id.id}`);
            setDebtEverything(data.everything);
            setDebtValue(data.value);
            setDebtDate(data.date);
            setDebtPaymetStatus(data.paymentStatus);
        } catch(error) {
           console.log(error)
        }
    };

    return(
        <div className="everything-container">
            <div className="everything-header">
                <CurrentMonth/>
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