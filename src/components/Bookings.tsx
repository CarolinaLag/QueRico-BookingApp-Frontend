import { useEffect, useState } from "react";
import { AdminBookingsWrapper } from "./styles/adminBookings";

interface IBookings {
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

  return (
    <>
      <AdminBookingsWrapper>
        <h1>Admin Översikt Bokningar</h1>
        {bookings.map((booking) => (
          <div>
            <p>{booking.ContactInfo.firstname}</p>
            <p>{booking.ContactInfo.lastname}</p>
            <p>{booking.ContactInfo.email}</p>
            <p>{booking.ContactInfo.phoneNumber}</p>
          </div>
        ))}
      </AdminBookingsWrapper>
    </>
  );
};

export default Bookings;
