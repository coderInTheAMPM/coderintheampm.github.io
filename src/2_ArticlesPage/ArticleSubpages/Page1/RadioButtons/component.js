import React, {useState} from "react";
import "./styles.scss";

import {animated, useSpring} from "react-spring";

function RadioButtons({selected, setSelected}) 
{
    const categories = 
    [
        { id: 1, value: "Sve" },
        { id: 2, value: "Burgeri" },
        { id: 3, value: "Doručak" },
        { id: 4, value: "Obroci" },
        { id: 5, value: "Paste" },
        { id: 6, value: "Pice" },
        { id: 7, value: "Salate" },
        { id: 8, value: "Sendviči" },
        { id: 9, value: "Poslastice" },
        { id: 10, value: "Pića" },
        { id: 11, value: "Alkohol" }
    ]; // To be read from a database

    return (
        <div className="radio-buttons">
        {
            categories.map(({id, value}) => 
            (
                <RadioButton key={id} value={value} selected={selected} setSelected={setSelected}/>
            ))
        }
        </div>
    );
}

function RadioButton({value, selected, setSelected}) 
{
    const [isHovered, setHovered] = useState(false);

    const springStyles = useSpring(
    { 
        backgroundColor: (value === selected) || isHovered ? "#ffdb7e" : "#ac3232",
        color: (value === selected) || isHovered ? "black" : "white"
    }); 

    return (
        <animated.div 
            className="item" 
            style={springStyles} 
            onClick={() => setSelected(value)} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {value}
        </animated.div>
    );
}

export default RadioButtons;
