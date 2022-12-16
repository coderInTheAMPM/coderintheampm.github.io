import "../pagestyles.scss";

// partikla koja kruzi oko misa

function Page3() {
    return (
        <section className="page">
            <h3>Kako napraviti partiklu koja osciluje oko miša preko Canvas API-a</h3>
            <h4>Konstruktor</h4>
            <p>Partikla mi je zapravo linija, ne krug, zbog efekta traga iza partikle.</p>
            <div className="code">
            {`constructor(color){
                this.color = color;
                this.x = undefined;
                this.y = undefined; 
            
                this.width = Utils.randomNumberInRange(3, 5);           // Ove partikle su zapravo linije koje se kreću vektorom skoro paralelnim toj liniji, ovo određuje dužinu te linije
                this.radians = Math.random() * 2 * Math.PI;             // Ugao u radijanima zbog Math.sin i Math.cos funkcija
                this.velocity = Utils.randomFloatInRange(0.04, 0.07);   // Brzina po kojoj se okreću
                this.distanceFromCenter = Utils.randomNumberInRange(50, 100);
                                        
                // Ovo sam uveo kako se partikle ne bi odma teleportovale do miša, nego da bude više smooth
                this.lastMousePosition = {x: Mouse.x, y: Mouse.y};
                this.lastPoint = undefined;
                this.followSpeed = 0.05;    
            }
            `}</div>
            <p>Imamo boju, koordinate, širinu linije, ugaoni pomeraj od 0 stepeni, brzinu, daljinu od centra, i konačno pomoćne varijable za glatko mrdanje partikle.</p>
            <h4>Update</h4>
            <p>Svaki frame ćemo računati poziciju i crtati partiklu:</p>
            <div className="code">
            {`update(){
                    this.calculateMovement();
                    this.draw();
                }
            `}
            </div>
            <p>Kod računanja pozicije, koristimo kosinus i sinus za izračunavanje x i y koordinate. Uzmemo poslednju poziciju kako bi se pomerili relativno njoj, i brzinu kretanja.</p>
            <p>Kod crtanja crtamo liniju:</p>
            <div className="code">
            {`draw(){
                context.beginPath();
                context.strokeStyle = this.color;
                context.lineWidth = this.width;
                context.moveTo(this.lastPoint.x, this.lastPoint.y);
                context.lineTo(this.x, this.y);
                context.stroke();
                context.closePath();
            }
            `}
            </div>
            <p>U delu gde čistite canvas, postavite alpha buffera za čišćenje na 0,2, kako bismo dobili efekat traga.</p>
            <p>Sad možete kreirati više ovih partikli, sa različitim pozicijama i brzinama, kako bismo dobili zabavan efekat.</p>
            <a href={"https://coderintheampm.github.io/RG2022/CanvasAPI/"} target="_blank" rel="noreferrer">Primer</a>
        </section>
    );
}

export default Page3;
