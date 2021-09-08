import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingConfirmationWrapper } from "../styles/bookingConfirmation";
import { Header, LinkStyle } from "../styles/global";
import Loader from "react-loader-spinner";

interface IParams {
  id: string;
}

const CancelReservation = () => {
  let { id } = useParams<IParams>();

  const [cancelReservationResponse, setCancelReservationResponse] = useState({
    loading: false,
    message: "",
  });

  useEffect(() => {
    axios.delete<string>(`http://localhost:3001/delete/${id}`).then((res) => {
      console.log(res.data);
      setCancelReservationResponse({ loading: true, message: res.data });
    });
  }, [id]);

  return (
    <>
      <Header>
        <h1>Avbokning</h1>
      </Header>
      <BookingConfirmationWrapper>
        {cancelReservationResponse.loading ? (
          <h2>{cancelReservationResponse.message}</h2>
        ) : (
          <Loader type={"Circles"} color="#00BFFF" height={80} width={80} />
        )}

        <LinkStyle href="/">Tillbaka</LinkStyle>
      </BookingConfirmationWrapper>
    </>
  );
};

export default CancelReservation;
