import './AddAndEditDebt.scss';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';



const AddDebt = ({icon, lastDescription, title}) => {
    return(
        <div className="add-debt-container" >
            <h2>{title}</h2>
            <CustomInput label="Descrição" value={''} type="text"/>
                <div className="add-debt-inputs">
                    <CustomInput label="Valor" value={''} type="number"/>
                    <CustomInput label="Parcelas" value={''} type="number"/>
                    <CustomInput label="Parcelas Pagas" value={''} type="number"/>
                </div>
            <CustomInput label="Observações" value={''} type="text"/>
            <CustomButton firstDescription={icon} lastDescription={lastDescription} />
        </div>
    );
};

export default AddDebt;