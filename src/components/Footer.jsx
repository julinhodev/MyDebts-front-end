import './Footer.scss';

import { ImGithub } from 'react-icons/im';

const Footer = () => {
    return(
        <div className="footer-container">
            <a href="https://github.com/julinhodev/" rel="noreferrer" target="_blank" className="footer-github">
                <ImGithub size={15} color="#778085"/>
                Julinhodev
            </a>
        </div>
    );
};

export default Footer;