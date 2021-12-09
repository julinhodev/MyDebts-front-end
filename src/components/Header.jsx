import './Header.scss';
import logo from '../assets/images/logo2.png';

import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    return(
        <div className="header-container">
            <nav className="nav-container">
                 <span className="header-logo">
                  {/*    <img src={logo} alt="Logo" /> */}
                  <h1>My Debts</h1>
                 </span>
                 < AiOutlineMenu size={35} color="#414345" />
            </nav>
        </div>
    );
};

export default Header;