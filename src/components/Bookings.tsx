import axios from "axios";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";
import { AdminBookingsWrapper } from "./styles/adminBookings";

interface IBookings {
  _id: any;
  ContactInfo: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
  };
}

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
  phoneNumber: string;
},
}

const Bookings = () => {
  const [bookings, setBookings] = useState<IBookings[]>([]);
  const [showEditForm, setShowEditForm] = useState(true);

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
  phoneNumber: "9074530457",
}
}

  useEffect(() => {
    fetch("/bookings")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => setBookings(response));
  }, []);
  console.log(bookings);

  const deleteBooking = (bookingId: IBookings) => {
    axios.get<any>(`http://localhost:3001/delete/${bookingId}`).then((res) => {
      setBookings(res.data);
    });
  };

  const handleAmountChange = (guests: number) => {
    console.log(guests);
  }

  const handleDateChange = (date: string) => {
    console.log(date);
  }

  const handleTimeslotChange = (timeslot: string) => {
    console.log(timeslot);
  }

  const handleChange = () => {
    console.log("Hej");
  }

  return (
    <>
      <AdminBookingsWrapper>
        <h1>Admin Översikt Bokningar</h1>
        {bookings.map((booking) => (
          <div key={booking._id}>
            <p>{booking.ContactInfo.firstname}</p>
            <p>{booking.ContactInfo.lastname}</p>
            <p>{booking.ContactInfo.email}</p>
            <p>{booking.ContactInfo.phoneNumber}</p>
            <button
              type="button"
              onClick={() => {
                deleteBooking(booking._id);
              }}
            >
              Radera
            </button>
          </div>
        ))}
        {showEditForm ? <EditForm reservation={dummyReservation} handleAmountChange={handleAmountChange} handleDateChange={handleDateChange} handleTimeslotChange={handleTimeslotChange} handleChange={handleChange}  /> : null}
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
