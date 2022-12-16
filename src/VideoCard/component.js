import "./styles.scss";

import cardsImage from "./cards.png";
import youtubeIcon from "./youtube.png";

function VideoCard() {
    return (
        <a className="video-card" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <div className="image-wrap">
                <img className="banner" src={cardsImage} alt="css"/>
            </div>
           
            <div className="card-body">
                <h4 className="title">Kako napraviti kartu u CSS-u?</h4>
                <p className="description">Saznajte kako napraviti kartu koju koristim na mom sajtu u CSS-u & HTML-u</p>
                <img className="youtube-icon" src={youtubeIcon} alt="YT"/>
            </div>
        </a>
    );
}

export default VideoCard;
