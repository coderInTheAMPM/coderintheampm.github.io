import ContactForm from "./ContactForm/component";
import InfoBox from "./InfoBox/component";
import "./styles.scss";

function ContactPage() {
    return (
        <section className="contact-page">
            <h1>Kontaktirajte me</h1>
            <ContactForm/>
            <InfoBox text="Ovo zapravo radi, tj. šalje mi mejl, više o ovome u video odbrani."/>
        </section>
    );
}

export default ContactPage;
