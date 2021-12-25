import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useAlert } from 'react-alert';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import BtnHome from './BtnHome';

import './AddAndEditDebt.scss';

const AddAndEditDebt = ({icon, lastDescription, title, actionEdit}) => {

    const alert = useAlert();
    const navigate = useNavigate();
    const params = useParams();

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

    // Filter Description and Everything
    const handleFilterString = (value, valueLength, errorMessage) => {
        if(typeof value === 'string' && value.length >= valueLength){
            return value;
        } else {
            alert.error(`É nescessário ter no mínimo ${valueLength} caracteres no campo ${errorMessage}!`);
        }
    };

    // Filter Value, Installments and paidInstallments
    const handleFilterNumber = value => value ? value : 0;

    // Functions Add and Edit Debt

    // Add Debt
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

    // Edit Debt
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
           alert.success(`A divida "${debtDescription}" foi editada com sucesso!!!`);
           navigate('/debts');
        } catch(error) {
            alert.error('Deu erro ao tentar adicionar uma divida');
        }
    };

    // Get Debt
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

    // Action Add or Edit
    const handleActionAddOrEdit = () => actionEdit ? handleEditDebt() : handleAddDebt();
    const handleActionGetOneDebt = () => actionEdit ? handleGetOneDebt() : null;

    useEffect(() => handleActionGetOneDebt());

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
            <CustomButton firstDescription={icon} lastDescription={lastDescription} onClick={handleActionAddOrEdit}/>
        </div>
    );
};

export default AddAndEditDebt;