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
  const dummyReservation: IReservation = {
    _id: "dk98y5498hsofs8",
    amountOfGuests: 2,
    amountOfTables: 1,
    timeSlot: "19:00",
    date: "02/09/2021",
    ContactInfo: {
      firstname: "Sophie",
      lastname: "Åkesson",
      email: "sophie.akesson@gmail.com",
      phoneNumber: 9074530457,
    },
  };

  useEffect(() => {
    axios.get<IReservation[]>("/bookings").then((response) => {
      if (response.status === 200) setReservations(response.data);
    });
  }, []);

  const deleteBooking = (id: string) => {
    axios.delete<any>(`http://localhost:3001/delete/${id}`).then((res) => {
      setReservations(res.data);
    });
  };

  // useEffect(() => {
  //   console.log(dummyReservation.date);
  //   console.log(new Date(dummyReservation.date));
  //   // console.log(new Date("02092021"));
  // }, [dummyReservation.date]);

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
      <EditForm
        handleAmountChange={handleAmountChange}
        handleDateChange={handleDateChange}
        handleTimeslotChange={handleTimeslotChange}
        handleChange={handleChange}
        reservation={dummyReservation}
      />
    </>
  );
};

export default AdminPage;
