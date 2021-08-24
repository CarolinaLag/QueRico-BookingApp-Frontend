import { useState } from "react";

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
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

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
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="Förnamn"
          value={input.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Efernamn"
          value={input.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="TeleNr"
          value={input.phoneNumber}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Book a table</button>
      </form>
    </>
  );
};

export default ContactForm;
