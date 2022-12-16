import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./styles.scss";

function NewsletterForm() {

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
            .sendForm('service_aua810v', 'template_irn5uvr', form.current, 'user_MRDQzXLHIb04auHsCuBhN')
            .then(
                result => {}, 
                error => {});

        wasEmailSent = true;
    };

    function hasEmptyField()
    {
        var name = document.forms["newsletter-form"]["name"].value;
        var email = document.forms["newsletter-form"]["email"].value;

        if (name == null || name === "" || email == null || email === "")
            return true;

        return false;
    }

    const clearForm = () => {
        document.getElementById("newsletter-form").reset();

        if(!wasEmailSent)
            console.log("Forma nepopunjena.");
    };

    return (
        <form name="newsletter-form" className="newsletter-form" onSubmit={submitForm} ref={form} id="newsletter-form">
            <div className="form-group">
                <label>Puno ime</label>
                <input type="text" className="form-input" name="name"/>
            </div>

            <div className="form-group">
                <label>Email adresa</label>
                <input type="text" className="form-input" name="email"/>
            </div>

            <button className="send">POŠALJITE</button>
        </form>
    );
}

export default NewsletterForm;
