import './AddDebt.scss';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import { RiAddBoxFill } from 'react-icons/ri';

const AddDebt = () => {
    return(
        <div className="add-debt-container" >
            <h2>Adicionar uma dívida</h2>
            <CustomInput label="Descrição" value={''} type="text"/>
                <div className="debt-inputs">
                    <CustomInput label="Valor" value={''} type="number"/>
                    <CustomInput label="Parcelas" value={''} type="number"/>
                    <CustomInput label="Parcelas Pagas" value={''} type="number"/>
                </div>
            <CustomInput label="Observações" value={''} type="text"/>
            <CustomButton firstDescription={<RiAddBoxFill size={20} color="#232526"/>} lastDescription="Adicionar" />
        </div>
    );
};

export default AddDebt;