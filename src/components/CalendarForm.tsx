import moment from 'moment';
import React, { ChangeEvent } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Header, HeadingWrapper } from './styles/global';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IAddReservation } from '../interface/interface';

interface ICalendarFormProps {
  handleDateChange(date: string): void;
  handleAmountChange(amount: number): void;
  handleTimeslotChange(timeslot: string): void;
  showTimeSlotOne: boolean;
  showTimeSlotTwo: boolean;
  message: string;
  bookingDate: string;
  reservation: IAddReservation;
}

const CalendarForm = (props: ICalendarFormProps) => {
  return (
    <>
      <Header>
        <HeadingWrapper>
          <h1>Boka bord</h1>
        </HeadingWrapper>
      </Header>

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <form>
          <div>
            <Calendar
              minDate={new Date(props.bookingDate)}
              maxDate={moment().add(2, 'months').toDate()}
              showWeekNumbers={true}
              value={new Date(props.reservation.date)}
              onChange={(date: Date) => {
                props.handleDateChange(
                  moment(date).format('YYYY-MM-DD').toString()
                );
              }}
            />
          </div>
          <div>
            <select
              data-testid="select"
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
              >
                19:00
              </button>
            ) : null}
          </div>
        </form>
        <p>{props.message}</p>
      </AnimationOnScroll>
    </>
  );
};

export default CalendarForm;
