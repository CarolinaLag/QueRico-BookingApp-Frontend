import { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      firstname: "",
      lastname: "",
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
  });

  return (
    <>
      <h1>Bookings page</h1>
      {bookings.map((booking) => (
        <div>
          <p>{booking.firstname}</p>
          <p>{booking.lastname}</p>
        </div>
      ))}
    </>
  );
};

export default Bookings;
