import "./styles.scss";

import ArticleCard from "../ArticleCard/component";
import VideoCard from "../VideoCard/component";
import Tape from "./Tape/component";

import langPic from "./language-menu.png";
import partPic from "./particles.png";
import radioPic from "./radio-buttons.png";

function HomePage() {
    return (
        <section className="home-page">
            <div className="welcome-wrapper">
                <div className="welcome">
                    <h3>Dobrodošli na DizajnX</h3>
                    <p>Pravo mesto za učenje CSS-a, Canvas API-a i ostalih biblioteka za stvaranje računarske grafike.</p>
                </div>
            </div>
            <Tape buttonText={"Moj besplatan bilten →"} to="/newsletter"/>

            <div className="top-articles">
                <ArticleCard href="/page1" img={radioPic} tag="React" title="Kako napraviti radio dugme u React-u" desc="Grupa dugmića gde samo jedno može biti selektovano. U React-u!"/> 
                <ArticleCard href="/page2" img={langPic} tag="React Spring" title="Kako napraviti animirani meni" desc="Animirani meni za jezike koji nastaje sa desne strane."/> 
                <ArticleCard href="/page3" img={partPic} tag="Canvas API" title="Kako napraviti kružeću partiklu" desc="Partikla koja kruži oko miša, sa efektom traga."/>
            </div>
            <Tape buttonText={"Još artikla"} to="/articles"/>

            <VideoCard/>
            <Tape buttonText={"Još videa"} to="/videos"/>

            
        </section>
    );
}

export default HomePage;
