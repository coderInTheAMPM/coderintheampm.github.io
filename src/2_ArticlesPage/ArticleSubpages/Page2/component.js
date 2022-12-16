import "../pagestyles.scss";
import TranslationButton from "./TranslationButton/component";

// napravite animirani meni sa react spring biblitekom

function Page2() {
    return (
        <section className="page">
            <h3>Kako napraviti animirani meni</h3>
            <p>Ovde sam napravio meni jezika, koji se pojavljuje na ekran sa desne strane, na kome sam implementirao radio button logiku iz drugog artikla.</p>
            <h4>Potrebna predznanja</h4>
            <p>Za svaki sajt koristim sass, css biblioteku koja pravi css čitljivijim i lakšim za upotrebu. Takođe, glavna biblioteka ovde je React Spring, biblioteka za animiranje, mada nije potrebna, možete koristiti i alternativne metode.</p>
            <h4>Implementacija menija</h4>
            <p>Komponenta za meni će primiti parametar u zavisnosti od kojeg je vidljiva ili ne:</p>
            <div className="code">
                {`function LanguageMenu({ isVisible })
                `}
            </div>
            <p>Ako je vidljiva, biće blizu desne strane, inače će biti van ekrana. (100 desno od desne ivice)</p>
            <div className="code">
                {`const springStyles = useSpring({ right: isVisible ? "20px" : "-100px"});
                `}
            </div>
            <p>Funkcionalnost radio dugmeta, inicijalna vrednost i niz tih dugmića u meniju.</p>
            <div className="code">
                {`const [selected, setSelected] = useState("English");
                `}
            </div>
            <div className="code">
                {`return ( 
                    <animated.div className="language-dropdown" style={springStyles}>
                        <LanguageItem language="English" selected={selected} setSelected={setSelected}/>
                        <LanguageItem language="Srpski" selected={selected} setSelected={setSelected}/>
                        <LanguageItem language="Српски" selected={selected} setSelected={setSelected}/>
                        <LanguageItem language="日本語" selected={selected} setSelected={setSelected}/>
                    </animated.div>
                );
                `}
            </div>
            <p>Komponenta jednog dugmeta, ista funkcionalnost kao u artiklu za radio dugme samo malo jednostavnije:</p>
            <div className="code">
                {`function LanguageItem({language, selected, setSelected}) 
                {
                    const springStyles = useSpring({ color: (language === selected) ? "yellow" : "white"});

                    return (
                        <animated.div className="item" style={springStyles} onClick={() => setSelected(language)}>
                            {language}
                        </animated.div>
                    );
                }
                `}
            </div>
            <TranslationButton/>
        </section>
    );
}

export default Page2;
