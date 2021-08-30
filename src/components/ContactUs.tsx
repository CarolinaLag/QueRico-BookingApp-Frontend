import { Link } from "react-router-dom";
import { ContactUsWrapper } from "./styles/contactUs";

const ContactUs = () => {
  return (
    <>
      <ContactUsWrapper>
        <h1>Kontakta oss</h1>
        <p>Har ni några funderingar går det bra att kontakta oss</p>
        <p>Varmt välkommen till oss på Que Rico Tapas!</p>
        <p>Tel: 073 654 454</p>
        <p>Email: info@querico.se</p>
        <p>Långholmsgatan 21, 117 33 Stockholm</p>

        <h2>
          För att boka bord, klicka här <Link to="/booking">Boka bord</Link>
        </h2>
      </ContactUsWrapper>
    </>
  );
};

export default ContactUs;
