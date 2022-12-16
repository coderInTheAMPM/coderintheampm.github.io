import "./styles.scss";

import { useNavigate } from "react-router-dom";

function ArticleCard({href, img, tag, title, desc}) {
    const navigate = useNavigate();

    return (
        <div className="article-card" onClick={() => navigate(href)}>
            <div className="image-wrap">
                <img src={img} alt="css"/>
            </div>
           
            <div className="body">
                <span className="tag">{tag}</span>
                <h4 className="title">{title}</h4>
                <p className="description">{desc}</p>
            </div>
        </div>
    );
}

export default ArticleCard;
