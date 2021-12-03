import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsFillCheckSquareFill } from 'react-icons/bs'

import './Debts.scss';

const Debts = ({ debts, colorIcons }) => {

    const date = new Date();
    const dateDay = date.getUTCDay(debts.date);
    const dateMonth = date.getUTCMonth(debts.date);
    const dateYear = date.getUTCFullYear(debts.date);

    return(
        <>
            <tr>
            <td className="debts-td  debts-description" >{ debts.description }</td>
            <td className="debts-td" >{ `R$ ${debts.value.toFixed(2)}` }</td>
            <td className="debts-td" >{ `${debts.paidInstallments}/${debts.installments}` }</td>
            {/* <td className="debts-td" >{ `${dateDay}/${dateMonth}/${dateYear}` }</td> */}
            <td className="debts-td" >
                <span className="debts-icons" >< AiFillEdit size={20} color=" #2ab7ca" /></span>
                <span className="debts-icons" >< AiFillDelete size={20} color="#fe4a49" /></span>
                <span className="debts-icons" > < CgNotes size={20} color="#4a4e4d" /></span>
            </td>
            <td className="debts-td" >
                < BsFillCheckSquareFill size={20} color={colorIcons} />
            </td>
            </tr>
        </>
    );
};

export default Debts;
