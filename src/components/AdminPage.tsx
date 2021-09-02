import ReservationList from "./ReservationList";

import { useEffect, useState } from "react";
import axios from "axios";

interface IReservation {
  _id: string;
  amountOfGuests: Number;
  amountOfTables: Number;
  timeSlot: String;
  date: String;
  ContactInfo: {
    firstname: String;
    lastname: String;
    email: String;
    phoneNumber: Number;
  };
}

const AdminPage = () => {
  const [reservations, setReservations] = useState<IReservation[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/bookings")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => setReservations(response));
  }, []);

  const deleteBooking = (id: string) => {
    axios.delete<any>(`http://localhost:3001/delete/${id}`).then((res) => {
      setReservations(res.data);
    });
  };
  return (
    <>
      <ReservationList
        reservations={reservations}
        deleteBooking={deleteBooking}
      ></ReservationList>
    </>
  );
};

export default AdminPage;
