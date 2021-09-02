import ReservationList from "./ReservationList";

import { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";

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

const AdminPage = () => {
  const [reservations, setReservations] = useState<IReservation[]>([]);

  useEffect(() => {
    axios.get<IReservation[]>("/bookings").then((response) => {
      if (response.status === 200) {
        setReservations(response.data);
        console.log(response.data[3]);
      }
    });
  }, []);

  const deleteBooking = (id: string) => {
    axios.delete<any>(`http://localhost:3001/delete/${id}`).then((res) => {
      setReservations(res.data);
    });
  };

  const handleAmountChange = (id: string, guests: number) => {
    console.log(guests);
  };

  const handleDateChange = (id: string, date: string) => {
    console.log(date);
  };

  const handleTimeslotChange = (id: string, timeslot: string) => {
    console.log(timeslot);
  };

  const handleChange = () => {
    console.log("Hej");
  };

  return (
    <>
      <ReservationList
        reservations={reservations}
        deleteBooking={deleteBooking}
      ></ReservationList>
      {reservations[0] === undefined ? null : (
        <EditForm
          handleAmountChange={handleAmountChange}
          handleDateChange={handleDateChange}
          handleTimeslotChange={handleTimeslotChange}
          handleChange={handleChange}
          reservation={reservations[3]}
        />
      )}
    </>
  );
};

export default AdminPage;
