import "./styles.scss";

import { HashLink as Link } from 'react-router-hash-link';
import TopLinks from "./TopLinks/component";

function Navbar() 
{
    return (
        <nav>
            <Link to="/#" className="LOGO">DizajnX</Link>

            <TopLinks/>
        </nav>
    );
}

export default Navbar;
