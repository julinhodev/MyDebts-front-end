import AddAndEditDebt from '../components/AddAndEditDebt';

import { FaEdit } from 'react-icons/fa';

import './Edit.scss';

const Edit = () => {
    return(
        <div className="edit-container">
            <div className="edit-form">
                <AddAndEditDebt icon={<FaEdit size={20} color="#232526"/> } lastDescription="Editar" title="Editar dívida"/> 
            </div>
        </div>
    );
};

export default Edit;