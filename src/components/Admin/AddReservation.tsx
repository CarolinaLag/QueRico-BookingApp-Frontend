import moment from "moment";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { IAddReservation } from "../../interface/interface";
import {
  ContactFormButtonWrapper,
  ContactFormContainer,
  ContactFormInfoWrapper,
  ContactFormInputsWrapper,
} from "../styles/contactForm";
import { Button } from "../styles/global";

interface IAddReservationProps {
  showReservationListPage(): void;
  showReservationCalendarPage(): void;
  showContactFormPage(): void;
  handleDateChange(date: string): void;
  handleAmountChange(amount: number): void;
  handleTimeslotChange(timeslot: string): void;
  showContactForm: boolean;
  showCalendarForm: boolean;
  bookingDate: string;
  showTimeSlotOne: boolean;
  showTimeSlotTwo: boolean;
  message: string;
  addReservation: IAddReservation;
  addContactInfo(
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string
  ): void;
}
const AddReservation = (props: IAddReservationProps) => {
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
      if (!/^[0-9]*$/.test(input.phoneNumber)) {
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
    const { name, value } = e.target;

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

  const goBackToReservationListButton = () => {
    props.showReservationCalendarPage();
    props.showReservationListPage();
  };
  const goBackToCalendarFormButton = () => {
    props.showReservationCalendarPage();
    props.showContactFormPage();
  };

  return (
    <>
      {props.showCalendarForm ? (
        <>
          <Button onClick={goBackToReservationListButton}>Tillbaka</Button>
          <form>
            <div>
              <Calendar
                minDate={new Date(props.bookingDate)}
                maxDate={moment().add(2, "months").toDate()}
                showWeekNumbers={true}
                value={new Date(props.addReservation.date)}
                onChange={(date: Date) => {
                  props.handleDateChange(moment(date).format("YYYY-MM-DD"));
                }}
              />
            </div>
            <div>
              <select
                name="amount"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  props.handleAmountChange(parseInt(e.target.value))
                }
              >
                <option value="">Antal</option>
                <option value="2">2 personer</option>
                <option value="3">3 personer</option>
                <option value="4">4 personer</option>
                <option value="5">5 personer</option>
                <option value="6">6 personer</option>
                <option value="7">7 personer</option>
                <option value="8">8 personer</option>
                <option value="9">9 personer</option>
                <option value="10">10 personer</option>
                <option value="11">11 personer</option>
                <option value="12">12 personer</option>
                <option value="13">13 personer</option>
                <option value="14">14 personer</option>
                <option value="15">15 personer</option>
                <option value="16">16 personer</option>
                <option value="17">17 personer</option>
                <option value="18">18 personer</option>
                <option value="19">19 personer</option>
                <option value="20">20 personer</option>
              </select>

              {props.showTimeSlotOne ? (
                <button
                  name="timeslot"
                  value="17:00"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    props.handleTimeslotChange(e.currentTarget.value)
                  }
                  type="button"
                >
                  17:00
                </button>
              ) : null}
              {props.showTimeSlotTwo ? (
                <button
                  name="timeslot"
                  value="19:00"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    props.handleTimeslotChange(e.currentTarget.value)
                  }
                  type="button"
                >
                  19:00
                </button>
              ) : null}
            </div>
          </form>
          <p>{props.message}</p>
        </>
      ) : null}
      {props.showContactForm ? (
        <>
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
                  maxLength={40}
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

                <ContactFormButtonWrapper>
                  <Button
                    disabled={
                      error.firstname.length > 0 ||
                      error.lastname.length > 0 ||
                      error.email.length > 0 ||
                      error.phoneNumber.length > 0
                    }
                    onClick={handleClick}
                  >
                    Boka bord
                  </Button>
                  <Button onClick={goBackToCalendarFormButton}>Tillbaka</Button>
                </ContactFormButtonWrapper>
              </ContactFormInputsWrapper>
            </form>
          </ContactFormContainer>
        </>
      ) : null}
    </>
  );
};

export default AddReservation;
