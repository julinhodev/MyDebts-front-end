import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './EditDebt.scss';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BtnHome from './BtnHome';

const AddDebt = ({icon, lastDescription, title}) => {
    const navigate = useNavigate();
    const alert = useAlert();
    const params = useParams();
    useEffect(() => handleGetOneDebt());

    const [debtDescription, setDebtDescription] = useState('');
    const [debtValue, setDebtValue] = useState('');
    const [debtInstallments, setDebtInstallments] = useState('');
    const [debtPaidInstallments, setDebtPaidInstallments] = useState('');
    const [debtEverything, setDebtEverything] = useState('');

    const onChangeDescription = e => {
        console.log(e.target.value)
        setDebtDescription(e.target.value)
    };    
    const onChangeValue = e => setDebtValue(e.target.value);
    const onChangeInstallments = e => setDebtInstallments(e.target.value);
    const onChangePaidInstallments = e => setDebtPaidInstallments(e.target.value);
    const onChangeEverything = e => setDebtEverything(e.target.value);

    const handleGetOneDebt = async () => {
        try{
            const { data } = await axios.get(`http://localhost/debts/${params.id}`);
                setDebtDescription(data.description);
                setDebtValue(data.value);
                setDebtInstallments(data.installments);
                setDebtPaidInstallments(data.paidInstallments);
                setDebtEverything(data.everything);
        } catch(error) {
            alert.error(error);
        }
    };

    const handleEditDebt = async () => {
        try{
            await axios.patch(`http://localhost/debts/${params.id}`,
             {
                description: debtDescription,
                value: debtValue,
                installments: debtInstallments,
                paidInstallments: debtPaidInstallments,
                everything: debtEverything
            });
            console.log(debtDescription)
           alert.success(`A divida "${debtDescription}" foi editada com sucesso!!!`);
           navigate('/debts');
        } catch(error) {
            alert.error('Deu erro ao tentar adicionar uma divida');
        }
    };

    return(
        <div className="debt-container" >
           <div className="debt-header">
                <h2>{title}</h2>
                <BtnHome/>
           </div>
            <CustomInput label="Descrição" type="text" onChange={onChangeDescription} value={debtDescription} />
                <div className="debt-inputs">
                    <CustomInput label="Valor" value={debtValue} type="number" onChange={onChangeValue} />
                    <CustomInput label="Parcelas" value={debtInstallments} type="number" onChange={onChangeInstallments}/>
                    <CustomInput label="Parcelas Pagas" value={debtPaidInstallments} type="number" onChange={onChangePaidInstallments}/>
                </div>
            <CustomInput label="Observações" value={debtEverything} type="text" onChange={onChangeEverything}/>
            <CustomButton firstDescription={icon} lastDescription={lastDescription} onClick={handleEditDebt}/>
        </div>
    );
};

export default AddDebt;