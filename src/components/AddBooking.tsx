import axios from "axios";
import { useState } from "react";

const AddBooking = () => {
  const [input, setInput] = useState({
    Booking: {
      ContactInfo: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
      },
    },
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
    const newBooking = {
      firstname: input.Booking.ContactInfo.firstname,
      lastname: input.Booking.ContactInfo.lastname,
      email: input.Booking.ContactInfo.email,
      phoneNumber: input.Booking.ContactInfo.phoneNumber,
    };
    axios.post("http://localhost:3001/create", newBooking);
    console.log(newBooking);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="Förnamn"
          value={input.Booking.ContactInfo.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Efernamn"
          value={input.Booking.ContactInfo.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.Booking.ContactInfo.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phonenumber"
          placeholder="TeleNr"
          value={input.Booking.ContactInfo.phoneNumber}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Book a table</button>
      </form>
    </>
  );
};

export default AddBooking;
