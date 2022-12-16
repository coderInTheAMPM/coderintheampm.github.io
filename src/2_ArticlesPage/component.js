import "./styles.scss";

import ArticleCard from "../ArticleCard/component";

import langPic from "./language-menu.png";
import partPic from "./particles.png";
import radioPic from "./radio-buttons.png";

function ArticlesPage() {
    return (
        <section className="articles-page">
            
            <div className="header-wrapper">
                <div className="header">
                    <h3 className="text">Artikli</h3>
                </div>
            </div>

            <div className="articles">
                <ArticleCard href="/page1" img={radioPic} tag="React" title="Kako napraviti radio dugme u React-u" desc="Grupa dugmića gde samo jedno može biti selektovano. U React-u!"/> 
                <ArticleCard href="/page2" img={langPic} tag="React Spring" title="Kako napraviti animirani meni" desc="Animirani meni za jezike koji nastaje sa desne strane."/> 
                <ArticleCard href="/page3" img={partPic} tag="Canvas API" title="Kako napraviti kružeću partiklu" desc="Partikla koja kruži oko miša, sa efektom traga."/>
            </div>
            
        </section>
    );
}

export default ArticlesPage;
