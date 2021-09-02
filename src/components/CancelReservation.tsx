import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingConfirmationWrapper } from "./styles/bookingConfirmation";
import { Header, HeadingWrapper, LinkStyle } from "./styles/global";

interface IParams {
  id: string;
}

const CancelReservation = () => {
  let { id } = useParams<IParams>();

  const [cancelMessage, setCancelMessage] = useState("Laddar...");

  useEffect(() => {
    axios.delete<any>(`http://localhost:3001/delete/${id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setCancelMessage("Din reservation är nu avbokad!");
      } else {
        setCancelMessage("Oj, något gick fel, försök igen");
      }
    });
  }, [id]);

  return (
    <>
      <Header>
        <HeadingWrapper>
          <h1>Avbokning</h1>
        </HeadingWrapper>
      </Header>
      <BookingConfirmationWrapper>
        <h1>{cancelMessage}</h1>
        <LinkStyle href="/">Tillbaka</LinkStyle>
      </BookingConfirmationWrapper>
    </>
  );
};

export default CancelReservation;
