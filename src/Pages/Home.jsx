import './Home.scss';
import imageHome from '../assets/images/logo.png';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate()

    const handleAccess = () => navigate('/debts');

    return(
        <div className="home-container">
            <div className="home-img">
             <img src={imageHome} alt="" />
            </div>
            <div className="home-login">
                <span className="home-button">
                    <CustomInput label="e-mail" type="email"/>
                    <CustomInput label="senha" type="password"/>
                    <CustomButton firstDescription={<FaUser size={18} color="" />} lastDescription="Entrar" onClick={handleAccess} />
                </span>
            </div>
        </div>
    );
};

export default Home;