import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { useAlert } from 'react-alert';

import './Debts.scss';

import DescriptionLength from '../model/DescriptionLength';
import BRLFormat from '../model/BRLFormat';

const Debts = ({ debts, fetchDebts }) => {
    const alert = useAlert();
    const navigate = useNavigate();

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

    const handleEditDebt = async () => {
        try {
            navigate(`/edit/${debts._id}`);
        } catch(error) {
            console.log('Deu erro ao deleter o débito.');
        }
    };

    const handleEverything = async () => {
        try {
            navigate(`/everything/${debts._id}`);
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
                <div className="debt-options">
                    <span className="options" >< CgNotes size={20} color="#fdf498" onClick={handleEverything} /></span>
                    <span className="options" >< FaEdit size={20} color="#f37736" onClick={handleEditDebt} /></span>
                    <span className="options" >< RiDeleteBin5Fill size={20} color="#ee4035" onClick={handleDeleteDebt} /></span>
                </div>
            </div>
        </div>
    );
};

export default Debts;
