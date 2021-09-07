import moment from "moment";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { IReservation } from "../../interface/interface";
import {
  ContactFormButtonWrapper,
  ContactFormContainer,
  ContactFormInfoWrapper,
  ContactFormInputsWrapper,
} from "../styles/contactForm";
import { Button } from "../styles/global";

interface IReservationProps {
  reservation: IReservation;
  updateReservation(reservation: IReservation): void;
  reservationEditMessage: string;
  showDetailsPage(): void;
  showEditPage(): void;
  showReservationListPage(): void;
}

const EditForm = (props: IReservationProps) => {
  const [editedObject, setEditedObject] = useState<IReservation>(
    props.reservation
  );

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const handleDateChange = (date: string) => {
    let tempReservation = editedObject;
    tempReservation.date = date;
    setEditedObject(tempReservation);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name;
    let value;

    if (name === "amountOfGuests") value = parseInt(e.target.value);
    else value = e.target.value;

    setEditedObject({ ...editedObject, [name]: value });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value;

    if (name === "phoneNumber") value = parseInt(e.target.value);
    else value = e.target.value;

    setEditedObject({
      ...editedObject,
      ContactInfo: { ...editedObject.ContactInfo, [name]: value },
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.updateReservation(editedObject);
    props.showReservationListPage();
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedObject]);

  const validate = () => {
    let errorMessages = {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
    };

    if (editedObject.ContactInfo.firstname === "") {
      errorMessages.firstname = "Förnamn saknas";
    } else {
      if (
        editedObject.ContactInfo.firstname.length >= 20 ||
        editedObject.ContactInfo.firstname.length <= 2
      ) {
        errorMessages.firstname =
          "Förnamn måste vara minst 2 och max 20 tecken";
      } else {
        errorMessages.firstname = "";
      }
    }
    if (editedObject.ContactInfo.lastname === "") {
      errorMessages.lastname = "Efternamn saknas";
    } else {
      if (
        editedObject.ContactInfo.lastname.length >= 20 ||
        editedObject.ContactInfo.lastname.length <= 2
      ) {
        errorMessages.lastname =
          "Efternamn måste vara minst 2 och max 20 tecken";
      } else {
        errorMessages.lastname = "";
      }
    }
    if (editedObject.ContactInfo.email === "") {
      errorMessages.email = "Email saknas";
    } else {
      if (!/\S+@\S+\.\S+/.test(editedObject.ContactInfo.email)) {
        errorMessages.email = "Email har ogiltigt format";
      } else {
        errorMessages.email = "";
      }
    }
    if (editedObject.ContactInfo.phoneNumber.toString() === "") {
      errorMessages.phoneNumber = "Telefonnummer saknas";
    } else {
      if (!/^[0-9]*$/.test(editedObject.ContactInfo.phoneNumber.toString())) {
        errorMessages.phoneNumber = "Telefonnummer har ogiltigt format";
      } else {
        if (editedObject.ContactInfo.phoneNumber.toString().length >= 20) {
          errorMessages.phoneNumber = "Telefonummer måste vara 20 tecken";
        } else {
          errorMessages.phoneNumber = "";
        }
      }
    }
    setError(errorMessages);
  };

  const goBackButton = () => {
    props.showEditPage();
    props.showDetailsPage();
  };

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
                value={new Date(editedObject.date)}
                onChange={(date: Date) => {
                  handleDateChange(
                    moment(date).format("YYYY-MM-DD").toString()
                  );
                }}
              />
              <div>
                <select
                  name="amountOfGuests"
                  value={editedObject.amountOfGuests}
                  onChange={handleSelectChange}
                >
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

                <select
                  name="timeSlot"
                  value={editedObject.timeSlot}
                  onChange={handleSelectChange}
                >
                  <option value="17:00">17:00</option>
                  <option value="19:00">19:00</option>
                </select>
              </div>
            </div>
            <input
              type="text"
              name="firstname"
              required
              minLength={2}
              maxLength={20}
              placeholder="Förnamn"
              value={editedObject.ContactInfo.firstname}
              onChange={handleInputChange}
            />
            {error.firstname && <small>{error.firstname}</small>}
            <input
              type="text"
              name="lastname"
              maxLength={20}
              placeholder="Efernamn"
              value={editedObject.ContactInfo.lastname}
              onChange={handleInputChange}
            />
            {error.lastname && <small>{error.lastname}</small>}
            <input
              type="email"
              name="email"
              maxLength={40}
              placeholder="querico@email.com"
              value={editedObject.ContactInfo.email}
              onChange={handleInputChange}
            />
            {error.email && <small>{error.email}</small>}
            <input
              type="text"
              name="phoneNumber"
              placeholder="0707245678"
              maxLength={20}
              value={editedObject.ContactInfo.phoneNumber.toString()}
              onChange={handleInputChange}
            />
            {error.phoneNumber && <small>{error.phoneNumber}</small>}
            <small>{props.reservationEditMessage}</small>
            <ContactFormButtonWrapper>
              <Button type="button" onClick={() => goBackButton()}>
                Tillbaka
              </Button>

              <Button
                disabled={
                  error.firstname.length > 0 ||
                  error.lastname.length > 0 ||
                  error.email.length > 0 ||
                  error.phoneNumber.length > 0
                }
                onClick={handleClick}
              >
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
