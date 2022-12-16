import { useState } from "react";
import "../pagestyles.scss";
import RadioButtons from "./RadioButtons/component";

// react radio button

function Page1() {
    const [selectedCategory, setSelectedCategory] = useState("Sve");

    return (
        <section className="page">
            <h3>Kako napraviti radio button dugmiće</h3>
            <p>Dok sam pravio sajt za restoran, odlučio sam da napravim red radio dugmića za odabir kategorije jela. Ako ne znate kod radio dugmeta možete odabrati samo jedno. Prvenstveno sam koristio ugrađenu radio dugme funkcionalnost u HTML-u, ali nikako nisam mogao da naredim da izgleda kako želim, kao obično dugme za svaku opciju, tako da sam na kraju napravio celu mehaniku sam, i o to ću vam sad pokazati.</p>
            <h4>Potrebna predznanja</h4>
            <p>Za svaki sajt koristim sass, css biblioteku koja pravi css čitljivijim i lakšim za upotrebu. Takođe ovde koristim React Spring biblioteku za animiranje, mada nije potrebna.</p>
            <h4>Niz kategorija</h4>
            <p>Napravio sam niz kategorija:</p>
            <div className="code">
                {`const categories = 
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
                ];
                `}
            </div>
            <p>Ovo bih idealno čitao iz baze podataka, ali je ovo prost primer.</p>
            <h4>Radio button komponenta</h4>
            <p>A sad na glavnu komponentu.</p>
            <div className="code">
            {`function RadioButton({value, selected, setSelected}) `}
            </div>
            <p>Prima 'value', vrednost tog dugmeta, 'selected', trenutno odabrano dugme (možete premestiti ovo i u globalnu), i 'setSelected', mogućnost podešavanja trenutnog dugmeta kao selektovanog</p>
            <p>Takođe imam proveru da li miš ide preko dugmeta, tačno je da ovo mogu samo odraditi preko CSS :hover, ali sam nasumično odabrao ovaj pravac.</p>
            <div className="code">{`const [isHovered, setHovered] = useState(false);`}</div>
            <p>Provera promene boje:</p>
            <div className="code">
                {`const springStyles = useSpring(
                { 
                    backgroundColor: (value === selected) || isHovered ? "#ffdb7e" : "#ac3232",
                    color: (value === selected) || isHovered ? "black" : "white"
                });`}</div>
            <p>I HTML struktura dugmeta, sa postavljenim funkcijama za postavljanje selektovanog:</p>
            <div className="code">
                {`return (
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
                `}
            </div>
            <p>Nazad u glavnoj klasi, koristimo JS map funkciju da napravimo radio dugme za svaku kategoriju:</p>
            <div className="code">
                {`return (
                    <div className="radio-buttons">
                    {
                        categories.map(({id, value}) => 
                        (
                            <RadioButton key={id} value={value} selected={selected} setSelected={setSelected}/>
                        ))
                    }
                    </div>
                );`}
            </div>
            <p>I ovo nam je sav kod potreban za funkcionalnost radio dugmića!</p>
            <RadioButtons selected={selectedCategory} setSelected={setSelectedCategory}/>
            <p>Ovo bi dalje mogli da povežemo sa bazom podataka, ali ovo je dovoljno za ovaj tutorijal.</p>
        </section>
    );
}

export default Page1;
