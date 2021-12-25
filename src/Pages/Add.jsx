import AddAndEditDebt from '../components/AddAndEditDebt';

import { RiAddBoxFill } from 'react-icons/ri';

import './Add.scss';

const Add = () => {
    return(
        <div className="add-container">
            <div className="add-form">
                <AddAndEditDebt icon={<RiAddBoxFill size={20} color="#FFFFFF"/> } lastDescription="Adicionar" title="Adicionar dívida"/> 
            </div>
        </div>
    );
};

export default Add;










