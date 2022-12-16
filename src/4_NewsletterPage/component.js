import "./styles.scss";
import NewsletterForm from './NewsletterForm/component';

function NewsletterPage() {
    return (
        <section className="newsletter-page">
            <h1>Pretplatite se na moj besplatan bilten</h1>
            <NewsletterForm/>
        </section>
    );
}

export default NewsletterPage;
