import { useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

import './AddAndEditDebt.scss';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const AddDebt = ({icon, lastDescription, title, click}) => {
    const navigate = useNavigate();
    const alert = useAlert();

    const handleBtnAddAndEdit = () => navigate('/');

    const [debtDescription, setDebtDescription] = useState('');
    const [debtValue, setDebtValue] = useState('');
    const [debtInstallments, setDebtInstallments] = useState('');
    const [debtPaidInstallments, setDebtPaidInstallments] = useState('');
    const [debtEverything, setDebtEverything] = useState('');

    const onChangeDescription = e => setDebtDescription(e.target.value);
    const onChangeValue = e => setDebtValue(e.target.value);
    const onChangeInstallments = e => setDebtInstallments(e.target.value);
    const onChangePaidInstallments = e => setDebtPaidInstallments(e.target.value);
    const onChangeEverything = e => setDebtEverything(e.target.value);

    const handlePost = (item, desc) => item.length > 0 ? item : desc;

    const handleAddDebt = async () => {
        try{
            await axios.post('http://localhost/debts',
             {
                description: handlePost(debtDescription, 'Sem descrição.'),
                value: handlePost(debtValue, 0),
                installments: handlePost(debtInstallments, 0),
                paidInstallments: handlePost(debtPaidInstallments, 0),
                everything: handlePost(debtEverything, 'Sem observação para essa dívida')
            });
            alert.success(`A dívida "${handlePost(debtDescription, 'Sem descrição.')}" foi adicionada com sucesso!`);
            handleBtnAddAndEdit();
        } catch(error) {
            alert.error('Deu erro ao tentar adicionar uma divida');
        }
    };

    const handleEditDebt = () => {
        try{
           alert.error(`Ainda não está sendo possível editar uma divida :(`);
           handleBtnAddAndEdit();
        } catch(error) {
            alert.error('Deu erro ao tentar adicionar uma divida');
        }
    };

    const handleActionsAddAndEdit = () => click === true ? handleAddDebt() : handleEditDebt();

    return(
        <div className="debt-container" >
            <h2>{title}</h2>
            <CustomInput label="Descrição" value={debtDescription} type="text" onChange={onChangeDescription}/>
                <div className="debt-inputs">
                    <CustomInput label="Valor" value={debtValue} type="number" onChange={onChangeValue}/>
                    <CustomInput label="Parcelas" value={debtInstallments} type="number" onChange={onChangeInstallments}/>
                    <CustomInput label="Parcelas Pagas" value={debtPaidInstallments} type="number" onChange={onChangePaidInstallments}/>
                </div>
            <CustomInput label="Observações" value={debtEverything} type="text" onChange={onChangeEverything}/>
            <CustomButton firstDescription={icon} lastDescription={lastDescription} onClick={handleActionsAddAndEdit}/>
        </div>
    );
};

export default AddDebt;