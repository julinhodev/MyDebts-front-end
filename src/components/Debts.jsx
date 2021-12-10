import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';
import { useAlert } from 'react-alert'

import './Debts.scss';

import DescriptionLength from '../model/DescriptionLength';
import BRLFormat from '../model/BRLFormat';

const Debts = ({ debts, fetchDebts }) => {

    const alert = useAlert();

    const numberLength = number => number < 10 ? `0${number}` : number;

    const handleConfirmPayment = async (e) => {
        try {
            await axios.patch(`http://localhost/debts/${debts._id}`, { paymentStatus: e.target.checked });
            await alert.success(`Divida "${debts.description}" movimentada com sucesso!!!`);
            await fetchDebts();
        } catch(error) {
            console.log('Deu erro ao modificar o status de pagamento.');
        }
    };

    const handleDeleteDebt = async () => {
        try {
            await axios.delete(`http://localhost/debts/${debts._id}`);
            await alert.success('Divida deletada com sucesso!');
            await fetchDebts();
        } catch(error) {
            console.log('Deu erro ao deleter o débito.');
        }
    };
    
    return(
        <div className="debt-item-container">
            <div className="debt-description">
                <label className={ debts.paymentStatus ? 'checkbox-container-completed' : 'checkbox-container'}>
                    <p>{DescriptionLength(debts.description)}</p>
                   <div className="debt-informations">
                    <input type="checkbox" defaultChecked={debts.paymentStatus} onChange={e => handleConfirmPayment(e)} />
                        <span className={debts.paymentStatus ? 'checkmark completed' : 'checkmark'} ></span>
                        <span>{BRLFormat(debts.value)}</span>
                        <span>{ `${numberLength(debts.paidInstallments)}/${numberLength(debts.installments)}` }</span>
                        
                    </div>
                </label>
                <span className="delete" >< AiFillDelete size={20} color="#fe4a49" onClick={handleDeleteDebt} /></span>
            </div>
        </div>
    );
};

export default Debts;
