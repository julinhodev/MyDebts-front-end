import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './AddAndEditDebt.scss';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const AddDebt = ({icon, lastDescription, title, click}) => {
    const navigate = useNavigate();
    const alert = useAlert();
    const params = useParams();
    const handleBtnAddAndEdit = () => navigate('/debts');

    useEffect(() => handleGetOneDebt());

    const [debtDescription, setDebtDescription] = useState('');
    const [debtValue, setDebtValue] = useState('');
    const [debtInstallments, setDebtInstallments] = useState('');
    const [debtPaidInstallments, setDebtPaidInstallments] = useState('');
    const [debtEverything, setDebtEverything] = useState('');

    const onChangeDescription = e => {
        setDebtDescription(e.target.value)
    };
    
    const onChangeValue = e => setDebtValue(e.target.value);
    const onChangeInstallments = e => setDebtInstallments(e.target.value);
    const onChangePaidInstallments = e => setDebtPaidInstallments(e.target.value);
    const onChangeEverything = e => setDebtEverything(e.target.value);

    const handlePost = (item, desc) => item.length > 0 ? item : desc;
    const handleActionsAddAndEdit = () => click === true ? handleAddDebt() : handleEditDebt();

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

    
    const handleGetOneDebt = async () => {
        try{
            const { data } = await axios.get(`http://localhost/debts/${params.id}`);
                setDebtDescription(data.description);
                setDebtValue(data.value);
                setDebtInstallments(data.installments);
                setDebtPaidInstallments(data.paidInstallments);
                setDebtEverything(data.everything);

                console.log(debtDescription)
                console.log(debtValue)
                console.log(debtInstallments)
                console.log(debtPaidInstallments)
                console.log(debtEverything)

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
            console.log(debtValue)
            console.log(debtInstallments)
            console.log(debtPaidInstallments)
            console.log(debtEverything)
           alert.success(`Divida editada com sucesso!!!`);
           handleBtnAddAndEdit();
        } catch(error) {
            alert.error('Deu erro ao tentar adicionar uma divida');
        }
    };

    return(
        <div className="debt-container" >
            <h2>{title}</h2>
            <CustomInput label="Descrição" value={debtDescription} type="text" onChange={onChangeDescription}/>
                <div className="debt-inputs">
                    <CustomInput label="Valor" value={debtValue} type="number" onChange={onChangeValue} />
                    <CustomInput label="Parcelas" value={debtInstallments} type="number" onChange={onChangeInstallments}/>
                    <CustomInput label="Parcelas Pagas" value={debtPaidInstallments} type="number" onChange={onChangePaidInstallments}/>
                </div>
            <CustomInput label="Observações" value={debtEverything} type="text" onChange={onChangeEverything}/>
            <CustomButton firstDescription={icon} lastDescription={lastDescription} onClick={handleActionsAddAndEdit}/>
        </div>
    );
};

export default AddDebt;