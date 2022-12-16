import "./styles.scss";

import { Link } from 'react-router-dom';

function TopLinks() 
{
    return (
        <ul className="top-links">
            <Link className="link" to="/articles">Članci</Link>
            <Link className="link" to="/videos">Videi</Link>
            <Link className="link" to="/newsletter">Bilten</Link>
            <Link className="link" to="/contact">Kontakt</Link>
        </ul>
    );
}

export default TopLinks;
