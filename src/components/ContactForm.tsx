import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContactFormButtonWrapper,
  ContactFormContainer,
  ContactFormInfoWrapper,
  ContactFormInputsWrapper,
  GdprWrapper,
} from "./styles/contactForm";
import { Button, Header, HeadingWrapper } from "./styles/global";

interface IContactFormProps {
  addContactInfo(
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: number
  ): void;
}

const ContactForm = (props: IContactFormProps) => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: 0,
    checkbox: false,
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: 0,
    // checkbox: false,
  });

  useEffect(() => {
    validation();
  }, [input]);

  const validation = () => {
    if (input.firstname === "") {
      setError({ ...error, firstname: "Förnamn saknas" });
    } else {
      setError({ ...error, firstname: "" });
    }
    if (input.lastname === "") {
      setError({ ...error, lastname: "Efternamn saknas" });
    } else {
      setError({ ...error, lastname: "" });
    }
    if (input.email === "") {
      setError({ ...error, email: "Email saknas" });
    } else {
      setError({ ...error, email: "" });
    }
    // } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    //   error.email = "Email is invalid";
    // }
  };

  const handleChange = (e: any) => {
    //const { name, value } = e.target;
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  console.log(error);
  console.log(input);
  const handleClick = (e: any) => {
    e.preventDefault();
    props.addContactInfo(
      input.firstname,
      input.lastname,
      input.email,
      input.phoneNumber
    );
  };

  return (
    <>
      <Header>
        <HeadingWrapper>
          <h1>Boka bord</h1>
        </HeadingWrapper>
      </Header>
      <ContactFormInfoWrapper>
        <h2>Kontaktinformation</h2>
      </ContactFormInfoWrapper>
      <ContactFormContainer>
        <form>
          <ContactFormInputsWrapper>
            <input
              type="text"
              name="firstname"
              placeholder="Förnamn"
              value={input.firstname}
              onChange={handleChange}
            />
            {error.firstname && <p>{error.firstname}</p>}
            <input
              type="text"
              name="lastname"
              placeholder="Efernamn"
              value={input.lastname}
              onChange={handleChange}
            />
            {error.lastname && <p>{error.lastname}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
            <input
              type="number"
              name="phoneNumber"
              placeholder="070-7245678"
              pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
              required
              value={input.phoneNumber}
              onChange={handleChange}
            />
            <small>Format: 070-7245678</small>
            <GdprWrapper>
              <input
                type="checkbox"
                checked={input.checkbox}
                name="checkbox"
                onChange={handleChange}
                //checked={true}
                //onChange={(e) => handleCheck(e)}
              />
              <p>Jag godkänner gdpr</p>
            </GdprWrapper>
            <ContactFormButtonWrapper>
              <Link to={"/"}>Tillbaka</Link>

              <Button
                disabled={
                  !input.firstname ||
                  !input.lastname ||
                  !input.email ||
                  !input.phoneNumber ||
                  input.checkbox === false
                }
                onClick={handleClick}
              >
                Boka bord
              </Button>
            </ContactFormButtonWrapper>
          </ContactFormInputsWrapper>
        </form>
      </ContactFormContainer>
    </>
  );
};

export default ContactForm;
