import { useEffect, useState } from "react";

interface IBookings {
  ContactInfo: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: number;
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
      <h1>Bookings page</h1>
      {bookings.map((booking) => (
        <div>
          <p>{booking.ContactInfo.firstname}</p>
          <p>{booking.ContactInfo.lastname}</p>
          <p>{booking.ContactInfo.email}</p>
          <p>{booking.ContactInfo.phoneNumber}</p>
        </div>
      ))}
    </>
  );
};

export default Bookings;
