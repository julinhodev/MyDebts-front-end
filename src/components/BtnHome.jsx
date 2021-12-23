import CustomButton from "./CustomButton";
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const BtnHome = () => {
    const navigate = useNavigate();

    const handleHome = () => navigate('/debts') ;
    return(
        <div className="btnhome-container">
            <CustomButton firstDescription={<AiFillHome size={20} />} lastDescription="Voltar" onClick={handleHome}/>
        </div>
    );
};

export default BtnHome;