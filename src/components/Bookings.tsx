import axios from "axios";
import { useEffect, useState } from "react";
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

const Bookings = () => {
  const [bookings, setBookings] = useState<IBookings[]>([]);

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
    axios.get<any>(`http://localhost:3001/delete/${bookingId}`);
    console.log(bookingId);
  };

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
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
