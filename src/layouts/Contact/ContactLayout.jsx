import ContactForm from "../../components/Contact/ContactForm";
import ContactMap from "../../components/Contact/ContactMap";
import StoreInfo from "../../components/Contact/StoreInfo";

const ContactLayout = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <StoreInfo />

        <ContactMap />

        {/* <ContactForm /> */}
      </div>
    </section>
  );
};

export default ContactLayout;
