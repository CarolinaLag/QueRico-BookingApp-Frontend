import { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      Booking: {
        ContactInfo: {
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
        },
      },
    },
  ]);

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
      <h1>Bookings page</h1>
      {bookings.map((booking) => (
        <div>
          <p>{booking.Booking.ContactInfo.firstname}</p>
          <p>{booking.Booking.ContactInfo.lastname}</p>
          <p>{booking.Booking.ContactInfo.email}</p>
          <p>{booking.Booking.ContactInfo.phoneNumber}</p>
        </div>
      ))}
    </>
  );
};

export default Bookings;
