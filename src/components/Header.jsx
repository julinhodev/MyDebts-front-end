import './Header.scss';

import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const navigate = useNavigate();

    const handleHeader = () => {
        navigate('/');
    };

    return(
        <div className="header-container">
            <nav className="nav-container">
                 <span className="header-logo" onClick={handleHeader} >
                    <h1>My Debts</h1>
                 </span>
                 < AiOutlineMenu size={35} color="#FFF" />
            </nav>
        </div>
    );
};

export default Header;