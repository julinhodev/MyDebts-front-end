import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAlert } from 'react-alert';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BtnHome from './BtnHome';

import './AddDebt.scss';

const AddDebt = ({icon, lastDescription, title}) => {
    const [debtDescription, setDebtDescription] = useState('');
    const [debtValue, setDebtValue] = useState('');
    const [debtInstallments, setDebtInstallments] = useState('');
    const [debtPaidInstallments, setDebtPaidInstallments] = useState('');
    const [debtEverything, setDebtEverything] = useState('');

    // Receiving input data and assigning to state
    const onChangeDescription = e => setDebtDescription(e.target.value);    
    const onChangeValue = e => setDebtValue(e.target.value);
    const onChangeInstallments = e => setDebtInstallments(e.target.value);
    const onChangePaidInstallments = e => setDebtPaidInstallments(e.target.value);
    const onChangeEverything = e => setDebtEverything(e.target.value);

    const alert = useAlert();

    const navigate = useNavigate();

    const handleFilterString = (value, valueLength, errorMessage) => {
        if(typeof value === 'string' && value.length >= valueLength){
            return value;
        } else {
            alert.error(`É nescessário ter no mínimo ${valueLength} caracteres no campo ${errorMessage}!`);
        }
    };

    const handleFilterNumber = value => value ? value : 0;

    const handleAddDebt = async () => {
        try{
            await axios.post('http://localhost/debts',
             {
                description: handleFilterString(debtDescription, 5, 'Descrição'),
                value: handleFilterNumber(debtValue),
                installments: handleFilterNumber(debtInstallments),
                paidInstallments: handleFilterNumber(debtPaidInstallments),
                everything: debtEverything ? debtEverything : 'Sem observações para essa dívida!'
            });
            alert.success(`A dívida foi adicionada com sucesso!`);
            navigate('/debts');
        } catch(error) {
            alert.error('Deu erro ao tentar adicionar uma divida');
        }
    };


    return(
        <div className="debt-container" >
           <div className="teste">
            <h2>{title}</h2>
            <BtnHome/>
           </div>
            <CustomInput label="Descrição" value={debtDescription} type="text" onChange={onChangeDescription}/>
                <div className="debt-inputs">
                    <CustomInput label="Valor" value={debtValue} type="number" onChange={onChangeValue} />
                    <CustomInput label="Parcelas" value={debtInstallments} type="number" onChange={onChangeInstallments}/>
                    <CustomInput label="Parcelas Pagas" value={debtPaidInstallments} type="number" onChange={onChangePaidInstallments}/>
                </div>
            <CustomInput label="Observações" value={debtEverything} type="text" onChange={onChangeEverything}/>
            <CustomButton firstDescription={icon} lastDescription={lastDescription} onClick={handleAddDebt}/>
        </div>
    );
};

export default AddDebt;