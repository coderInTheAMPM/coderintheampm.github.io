import VideoCard from "../VideoCard/component";
import "./styles.scss";

function VideosPage() {
    return (
        <section className="videos-page">
            
            <div className="header-wrapper">
                <div className="header">
                    <h3 className="text">Videi</h3>
                </div>
            </div>

            <VideoCard/>
        </section>
    );
}

export default VideosPage;
