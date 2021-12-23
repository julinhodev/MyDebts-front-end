import EditDebt from '../components/EditDebt';
import { FaEdit } from 'react-icons/fa';

import './Edit.scss';

const Edit = () => {
    return(
        <div className="edit-container">
            <div className="edit-form">
                <EditDebt icon={<FaEdit size={20} color="#FFFFFF"/> } lastDescription="Editar" title="Editar dívida"/> 
            </div>
        </div>
    );
};

export default Edit;