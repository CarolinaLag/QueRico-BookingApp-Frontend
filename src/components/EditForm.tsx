import moment from "moment";
import { ChangeEvent, useEffect } from "react";
import Calendar from "react-calendar";
import {
  ContactFormButtonWrapper,
  ContactFormContainer,
  ContactFormInfoWrapper,
  ContactFormInputsWrapper,
} from "./styles/contactForm";
import { Button } from "./styles/global";

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
  handleDateChange(id: string, date: string): void;
  handleAmountChange(id: string, amount: number): void;
  handleTimeslotChange(id: string, timeslot: string): void;
  handleChange(): void;
}

const EditForm = (props: IReservationProps) => {
  // useEffect(() => {
  //   console.log(1, props.reservation);
  // }, [props.reservation]);

  return (
    <>
      <ContactFormInfoWrapper>
        <h2>Kontaktinformation</h2>
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
                  props.handleDateChange(
                    props.reservation._id,
                    moment(date).format("YYYY-MM-DD").toString()
                  );
                }}
              />
              <div>
                <select
                  name='amount'
                  value={props.reservation.amountOfGuests}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    props.handleAmountChange(
                      props.reservation._id,
                      parseInt(e.target.value)
                    )
                  }
                >
                  <option value=''>Antal</option>
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
                    props.handleTimeslotChange(
                      props.reservation._id,
                      e.target.value
                    )
                  }
                >
                  <option value=''>Tid</option>
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
              value={props.reservation.ContactInfo.firstname}
              onChange={props.handleChange}
            />
            {/* {error.firstname && <small>{error.firstname}</small>} */}
            <input
              type='text'
              name='lastname'
              maxLength={20}
              placeholder='Efernamn'
              value={props.reservation.ContactInfo.lastname}
              onChange={props.handleChange}
            />
            {/* {error.lastname && <small>{error.lastname}</small>} */}
            <input
              type='email'
              name='email'
              maxLength={40}
              placeholder='querico@email.com'
              value={props.reservation.ContactInfo.email}
              onChange={props.handleChange}
            />
            {/* {error.email && <small>{error.email}</small>} */}
            <input
              type='text'
              name='phoneNumber'
              placeholder='0707245678'
              maxLength={20}
              //pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
              value={props.reservation.ContactInfo.phoneNumber}
              onChange={props.handleChange}
            />
            {/* {error.phoneNumber && <small>{error.phoneNumber}</small>} */}
            <ContactFormButtonWrapper>
              <button>
                {/* <button type="button" onClick={() => props.addShowContactForm()}> */}
                Tillbaka
              </button>
              <Button>
                {/* <Button
                disabled={
                  error.firstname.length > 0 ||
                  error.lastname.length > 0 ||
                  error.email.length > 0 ||
                  error.phoneNumber.length > 0 ||
                  input.checkbox === false
                }
                onClick={handleClick}
              > */}
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
