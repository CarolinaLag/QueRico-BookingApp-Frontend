import moment from "moment";
import React, { ChangeEvent } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Button, Header } from "../styles/global";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IAddReservation } from "../../interface/interface";
import { SelectGuestDropDown } from "../styles/adminBookings";
import {
  BookingCalendarSection,
  BookingCalendarWrapper,
} from "../styles/calendarForm";

interface ICalendarFormProps {
  handleDateChange(date: string): void;
  handleAmountChange(amount: number): void;
  handleTimeslotChange(timeslot: string): void;
  showTimeSlotOne: boolean;
  showTimeSlotTwo: boolean;
  message: string;
  bookingDate: string;
  reservation: IAddReservation;
  errorMessage: string;
}

const CalendarForm = (props: ICalendarFormProps) => {
  return (
    <>
      <Header>
        <h1>Boka bord</h1>
      </Header>

      <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
        <BookingCalendarWrapper>
          <form>
            <BookingCalendarSection>
              <div>
                <Calendar
                  minDate={new Date(props.bookingDate)}
                  maxDate={moment().add(2, "months").toDate()}
                  showWeekNumbers={true}
                  value={new Date(props.reservation.date)}
                  onChange={(date: Date) => {
                    props.handleDateChange(
                      moment(date).format("YYYY-MM-DD").toString()
                    );
                  }}
                />
              </div>
            </BookingCalendarSection>

            <div>
              <SelectGuestDropDown
                data-testid='select'
                name='amount'
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  props.handleAmountChange(parseInt(e.target.value))
                }
                value={props.reservation.guests}
              >
                <option value='0'>Antal</option>
                <option value='1'>1 person</option>
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
              </SelectGuestDropDown>

              {props.showTimeSlotOne ? (
                <Button
                  name='timeslot'
                  value='17:00'
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    props.handleTimeslotChange(e.currentTarget.value)
                  }
                  type='button'
                >
                  17:00
                </Button>
              ) : null}
              {props.showTimeSlotTwo ? (
                <Button
                  name='timeslot'
                  value='19:00'
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    props.handleTimeslotChange(e.currentTarget.value)
                  }
                >
                  19:00
                </Button>
              ) : null}
            </div>
            <p>{props.message}</p>
          </form>
          <p className='errorMessage'>{props.errorMessage}</p>
        </BookingCalendarWrapper>
      </AnimationOnScroll>
    </>
  );
};

export default CalendarForm;
