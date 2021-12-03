import { AiFillDelete, AiFillCheckCircle, AiFillEdit } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';

import './Debts.scss';

const Debts = ({ debts, colorIcons }) => {

    const date = new Date()
    const dateDay = date.getUTCDay(debts.date);
    const dateMonth = date.getUTCMonth(debts.date);
    const dateYear = date.getUTCFullYear(debts.date);

    return(
        <div className="debts-container">

           <div className="debts-descriptions" >
               <span className="debts-description">{ debts.description }</span>
               <span className="debts-value">{ `R$ ${debts.value.toFixed(2)}` }</span>
               <span className="debts-installments">{ `${debts.paidInstallments}/${debts.installments}` }</span>
               <span className="debts-description">{ `${dateDay}/${dateMonth}/${dateYear}` }</span>
            </div>
            <div className="debts-icons">
                    < AiFillEdit size={20} color=" #2ab7ca" />
                    < AiFillDelete size={20} color="#fe4a49" />
                    < CgNotes size={20} color="#4a4e4d" />
                    < AiFillCheckCircle size={20} color={colorIcons} />
            </div>
        </div>
    );
};

export default Debts;