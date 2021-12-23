import AddDebt from '../components/AddDebt';

import { RiAddBoxFill } from 'react-icons/ri';

import './Add.scss';

const Add = () => {
    return(
        <div className="add-container">
            <div className="add-form">
                <AddDebt icon={<RiAddBoxFill size={20} color="#FFFFFF"/> } lastDescription="Adicionar" title="Adicionar dívida"/> 
            </div>
        </div>
    );
};

export default Add;










