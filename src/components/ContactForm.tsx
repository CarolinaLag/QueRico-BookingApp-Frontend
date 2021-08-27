import { ChangeEvent, useRef } from "react";
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
    phoneNumber: string
  ): void;
}

const ContactForm = (props: IContactFormProps) => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const validation = () => {
    let errorMessages = {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
    };
    if (input.firstname === "") {
      errorMessages.firstname = "Förnamn saknas";
    } else {
      if (input.firstname.length >= 20 || input.firstname.length <= 2) {
        errorMessages.firstname =
          "Förnamn måste vara minst 2 och max 20 tecken";
      } else {
        errorMessages.firstname = "";
      }
    }
    if (input.lastname === "") {
      errorMessages.lastname = "Efternamn saknas";
    } else {
      if (input.lastname.length >= 20 || input.lastname.length <= 2) {
        errorMessages.lastname =
          "Efternamn måste vara minst 2 och max 20 tecken";
      } else {
        errorMessages.lastname = "";
      }
    }
    if (input.email === "") {
      errorMessages.email = "Email saknas";
    } else {
      if (!/\S+@\S+\.\S+/.test(input.email)) {
        errorMessages.email = "Email har ogiltigt format";
      } else {
        errorMessages.email = "";
      }
    }
    if (input.phoneNumber === "") {
      errorMessages.phoneNumber = "Telefonnummer saknas";
    } else {
      if (
        /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(
          input.phoneNumber
        )
      ) {
        errorMessages.phoneNumber = "Telefonnummer har ogiltigt format";
      } else {
        if (input.phoneNumber.length >= 20) {
          errorMessages.phoneNumber = "Telefonummer måste vara 20 tecken";
        } else {
          errorMessages.phoneNumber = "";
        }
      }
    }
    setError(errorMessages);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.addContactInfo(
      input.firstname,
      input.lastname,
      input.email,
      input.phoneNumber
    );
    setInput({
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      checkbox: false,
    });
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
              required
              minLength={2}
              maxLength={20}
              placeholder="Förnamn"
              value={input.firstname}
              onChange={handleChange}
            />
            {error.firstname && <small>{error.firstname}</small>}
            <input
              type="text"
              name="lastname"
              maxLength={20}
              placeholder="Efernamn"
              value={input.lastname}
              onChange={handleChange}
            />
            {error.lastname && <small>{error.lastname}</small>}
            <input
              type="email"
              name="email"
              maxLength={25}
              placeholder="querico@email.com"
              value={input.email}
              onChange={handleChange}
            />
            {error.email && <small>{error.email}</small>}
            <input
              type="text"
              name="phoneNumber"
              placeholder="0707245678"
              maxLength={20}
              //pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
              value={input.phoneNumber}
              onChange={handleChange}
            />
            {error.phoneNumber && <small>{error.phoneNumber}</small>}
            <GdprWrapper>
              <input
                type="checkbox"
                checked={input.checkbox}
                name="checkbox"
                onChange={handleChange}
              />
              <p>
                Jag godkänner Gdpr:s
                <a
                  href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/introduktion-till-gdpr/dataskyddsforordningen-i-fulltext/"
                  target="_blank"
                  rel="noreferrer"
                >
                  villkor
                </a>
              </p>
            </GdprWrapper>
            <ContactFormButtonWrapper>
              <Link to={"/"}>Tillbaka</Link>

              <Button
                disabled={
                  error.firstname.length > 0 ||
                  error.lastname.length > 0 ||
                  error.email.length > 0 ||
                  error.phoneNumber.length > 0 ||
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
