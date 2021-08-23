import axios from "axios";
import { useState } from "react";

const AddBooking = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
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
      firstname: input.firstname,
      lastname: input.lastname,
    };
    axios.post("http://localhost:3001/create", newBooking);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={input.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={input.lastname}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Book a table</button>
      </form>
    </>
  );
};

export default AddBooking;
