import './Header.scss';

import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    return(
        <div className="header-container">
            <nav className="nav-container">
                 <span className="header-logo">
                    <h1>My Debts</h1>
                 </span>
                 < AiOutlineMenu size={35} color="#FFF" />
            </nav>
        </div>
    );
};

export default Header;