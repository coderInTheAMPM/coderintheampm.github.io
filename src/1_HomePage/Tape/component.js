import { useNavigate } from "react-router-dom";
import "./styles.scss";

function Tape({buttonText, to}) {
    const navigate = useNavigate();

    return (
        <div className="tape">
            <button onClick={() => navigate(to)}>{buttonText}</button>
        </div>
    );
}

export default Tape;
