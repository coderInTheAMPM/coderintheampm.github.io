import "./styles.scss";

function InfoBox({text}) {
    const pred = "Napomena: ";

    return (
        <div className="info-box">
            <pre> {/* da održi space */}
                <b>{pred}</b>{text}
            </pre>
        </div>
    );
}

export default InfoBox;
