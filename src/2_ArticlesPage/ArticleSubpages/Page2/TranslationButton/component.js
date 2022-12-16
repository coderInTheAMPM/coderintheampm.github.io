import React, { useState } from "react";
import "./styles.scss";

import {animated, useSpring} from "react-spring";

import translateIcon from "./Google_Translate_Icon.png";

function TranslationButton() 
{
    const [isActive, setActive] = useState(false);

    return (
        <div className="translation-wrapper">
            <img className="translate-button" src={translateIcon} alt="translate" onClick={() => setActive(!isActive)}/>

            <LanguageMenu isVisible={isActive}/>
        </div>
    );
}

function LanguageMenu({ isVisible }) 
{
    const springStyles = useSpring({ right: isVisible ? "20px" : "-100px"});

    const [selected, setSelected] = useState("English");

    // dodati Context hook
    return ( 
        <animated.div className="language-dropdown" style={springStyles}>
            <LanguageItem language="English" selected={selected} setSelected={setSelected}/>
            <LanguageItem language="Srpski" selected={selected} setSelected={setSelected}/>
            <LanguageItem language="Српски" selected={selected} setSelected={setSelected}/>
            <LanguageItem language="日本語" selected={selected} setSelected={setSelected}/>
        </animated.div>
    );
}

function LanguageItem({language, selected, setSelected}) 
{
    const springStyles = useSpring({ color: (language === selected) ? "yellow" : "white"});

    return (
        <animated.div className="item" style={springStyles} onClick={() => setSelected(language)}>
            {language}
        </animated.div>
    );
}

export default TranslationButton;
