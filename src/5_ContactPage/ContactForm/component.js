import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./styles.scss";

function ContactForm() {

    var wasEmailSent = false;

    const form = useRef();

    const submitForm = (e) => {
        sendEmail(e);
        clearForm();
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(hasEmptyField())
            return;

        emailjs
            .sendForm('service_jnr7drh', 'template_irn5uvr', form.current, 'user_MRDQzXLHIb04auHsCuBhN')
            .then(
                result => {}, 
                error => {});

        wasEmailSent = true;
    };

    function hasEmptyField()
    {
        var name = document.forms["contact-form"]["name"].value;
        var email = document.forms["contact-form"]["email"].value;
        var message = document.forms["contact-form"]["message"].value;

        if (name == null || name === "" || email == null || email === "" || message == null || message === "")
            return true;

        return false;
    }

    const clearForm = () => {
        document.getElementById("contact-form").reset();

        if(!wasEmailSent)
            console.log("Forma nepopunjena.");
    };
 
    return (
        <form name="contact-form" className="contact-form" onSubmit={submitForm} ref={form} id="contact-form">
            <div className="form-group">
                <label>Puno ime</label>
                <input type="text" className="form-input" name="name"/>
            </div>

            <div className="form-group">
                <label>Email adresa</label>
                <input type="text" className="form-input" name="email"/>
            </div>

            <div className="form-group">
                <label>Poruka</label> <br/>
                <textarea type="text" className="form-input message" name="message"/>
            </div>

            <button className="send">POŠALJITE</button>
        </form>
    );
}

export default ContactForm;
