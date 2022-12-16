import "./styles.scss";

import ftnLOGO from "./ftn.png";

function Footer() {
    return (
        <div className="footer">
            <div className="info">
                Projekat iz računarske grafike
            </div>
            <img src={ftnLOGO} alt="ftn"/>
            <div className="people-info">
                <div className="name">Profesor: dr Veljko Aleksić</div> 
                <div className="name">Student: Pavle Milanović</div>
            </div>
        </div>
    );
}

export default Footer;
