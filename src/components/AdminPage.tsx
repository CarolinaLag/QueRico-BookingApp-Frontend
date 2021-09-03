import ReservationList from "./ReservationList";

import { useEffect, useState } from "react";
import axios from "axios";

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
  const [showReservationDetails, setShowReservationDetails] = useState(false);

  const showDetailsPage = () => {
    setShowReservationDetails(true);
  };

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
        showDetailsPage={showDetailsPage}
        reservations={reservations}
        deleteBooking={deleteBooking}
      ></ReservationList>
    </>
  );
};

export default AdminPage;
