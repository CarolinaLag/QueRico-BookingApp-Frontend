import moment from "moment";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import {
  ContactFormButtonWrapper,
  ContactFormContainer,
  ContactFormInfoWrapper,
  ContactFormInputsWrapper,
} from "../styles/contactForm";
import { Button } from "../styles/global";

interface IReservation {
  _id: string;
  amountOfGuests: number;
  amountOfTables: number;
  timeSlot: string;
  date: string;
  ContactInfo: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: number;
  };
}

interface IReservationProps {
  reservation: IReservation;
  updateReservation(reservation: IReservation): void;
}

const EditForm = (props: IReservationProps) => {
  const editedObject: IReservation = props.reservation;
  const [inputs, setInputs] = useState({
    firstname: editedObject.ContactInfo.firstname,
    lastname: editedObject.ContactInfo.lastname,
    email: editedObject.ContactInfo.email,
    phoneNumber: editedObject.ContactInfo.phoneNumber.toString(),
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const handleDateChange = (date: string) => {
    editedObject.date = date;
  }

  const handleAmountChange = (guests: number) => {
    editedObject.amountOfGuests = guests;
  }

  const handleTimeslotChange = (timeslot: string) => {
    editedObject.timeSlot = timeslot;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs({...inputs, [name]: value});
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    editedObject.ContactInfo.firstname = inputs.firstname;
    editedObject.ContactInfo.lastname = inputs.lastname;
    editedObject.ContactInfo.email = inputs.email;
    editedObject.ContactInfo.phoneNumber = parseInt(inputs.phoneNumber);
    props.updateReservation(editedObject);
  }

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  const validate = () => {
    let errorMessages = {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
    };

    if (inputs.firstname === "") {
      errorMessages.firstname = "Förnamn saknas";
    } else {
      if (inputs.firstname.length >= 20 || inputs.firstname.length <= 2) {
        errorMessages.firstname =
          "Förnamn måste vara minst 2 och max 20 tecken";
      } else {
        errorMessages.firstname = "";
      }
    }
    if (inputs.lastname === "") {
      errorMessages.lastname = "Efternamn saknas";
    } else {
      if (inputs.lastname.length >= 20 || inputs.lastname.length <= 2) {
        errorMessages.lastname =
          "Efternamn måste vara minst 2 och max 20 tecken";
      } else {
        errorMessages.lastname = "";
      }
    }
    if (inputs.email === "") {
      errorMessages.email = "Email saknas";
    } else {
      if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errorMessages.email = "Email har ogiltigt format";
      } else {
        errorMessages.email = "";
      }
    }
    if (inputs.phoneNumber === "") {
      errorMessages.phoneNumber = "Telefonnummer saknas";
    } else {
      // if (
      //   /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(
      //     inputs.phoneNumber
      //   ))
      if (!/^[0-9]*$/.test(inputs.phoneNumber)) 
       {
        errorMessages.phoneNumber = "Telefonnummer har ogiltigt format";
      } else {
        if (inputs.phoneNumber.length >= 20) {
          errorMessages.phoneNumber = "Telefonummer måste vara 20 tecken";
        } else {
          errorMessages.phoneNumber = "";
        }
      }
    }
    setError(errorMessages);
  }

  return (
    <>
      <ContactFormInfoWrapper>
        <h2>Bokningsredigering</h2>
      </ContactFormInfoWrapper>
      <ContactFormContainer>
        <form>
          <ContactFormInputsWrapper>
            <div>
              <Calendar
                minDate={new Date()}
                maxDate={moment().add(2, "months").toDate()}
                showWeekNumbers={true}
                value={new Date(props.reservation.date)}
                onChange={(date: Date) => {
                  handleDateChange(
                    moment(date).format("YYYY-MM-DD").toString()
                  );
                }}
              />
              <div>
                <select
                  name='amount'
                  value={props.reservation.amountOfGuests}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleAmountChange(
                      parseInt(e.target.value)
                    )
                  }
                >
                  <option value='2'>2 personer</option>
                  <option value='3'>3 personer</option>
                  <option value='4'>4 personer</option>
                  <option value='5'>5 personer</option>
                  <option value='6'>6 personer</option>
                  <option value='7'>7 personer</option>
                  <option value='8'>8 personer</option>
                  <option value='9'>9 personer</option>
                  <option value='10'>10 personer</option>
                  <option value='11'>11 personer</option>
                  <option value='12'>12 personer</option>
                  <option value='13'>13 personer</option>
                  <option value='14'>14 personer</option>
                  <option value='15'>15 personer</option>
                  <option value='16'>16 personer</option>
                  <option value='17'>17 personer</option>
                  <option value='18'>18 personer</option>
                  <option value='19'>19 personer</option>
                  <option value='20'>20 personer</option>
                </select>

                <select
                  name='timeslot'
                  value={props.reservation.timeSlot}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleTimeslotChange(
                      e.target.value
                    )
                  }
                >
                  <option value='17:00'>17:00</option>
                  <option value='19:00'>19:00</option>
                </select>
              </div>
            </div>
            <input
              type='text'
              name='firstname'
              required
              minLength={2}
              maxLength={20}
              placeholder='Förnamn'
              value={inputs.firstname}
              onChange={handleInputChange}
            />
            {error.firstname && <small>{error.firstname}</small>}
            <input
              type='text'
              name='lastname'
              maxLength={20}
              placeholder='Efernamn'
              value={inputs.lastname}
              onChange={handleInputChange}
            />
            {error.lastname && <small>{error.lastname}</small>}
            <input
              type='email'
              name='email'
              maxLength={40}
              placeholder='querico@email.com'
              value={inputs.email}
              onChange={handleInputChange}
            />
            {error.email && <small>{error.email}</small>}
            <input
              type='text'
              name='phoneNumber'
              placeholder='0707245678'
              maxLength={20}
              //pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
              value={inputs.phoneNumber}
              onChange={handleInputChange}
            />
            {error.phoneNumber && <small>{error.phoneNumber}</small>}
            <ContactFormButtonWrapper>
              <button>
                {/* <button type="button" onClick={() => props.addShowContactForm()}> */}
                Tillbaka
              </button>
              <Button disabled={
                  error.firstname.length > 0 ||
                  error.lastname.length > 0 ||
                  error.email.length > 0 ||
                  error.phoneNumber.length > 0} onClick={handleClick}>
                Spara
              </Button>
            </ContactFormButtonWrapper>
          </ContactFormInputsWrapper>
        </form>
      </ContactFormContainer>
    </>
  );
};

export default EditForm;
