import AddAndEditDebt from '../components/AddAndEditDebt';

import { FaEdit } from 'react-icons/fa';

import './Edit.scss';

const Edit = () => {
    return(
        <div className="edit-container">
            <AddAndEditDebt icon={<FaEdit size={20} color="#232526"/> } lastDescription="Editar" title="Editar dívida" /> 
        </div>
    );
};

export default Edit;