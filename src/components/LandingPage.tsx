import {
  LandingPageImageSection,
  LandingPageWrapper,
  SpainImage,
  OrangeDrinkImage,
  MeatballsImage,
  TapasImage,
  ImageDrinkDiv,
  ImageTapasDiv,
  LandingPageTextMenu,
  LandinPageTextReservation,
  ArrowDownLink,
} from "./styles/landingPage";
import SpainStairsSrc from "../assets/espana.jpg";
import OrangeDrinkSrc from "../assets/orangedrink.jpg";
import MeatballsSrc from "../assets/albondigas.jpg";
import TapasSrc from "../assets/tapas.jpg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import { RedButton } from "./styles/global";
import { useEffect, useRef, useState } from "react";

const LandingPage = () => {
  const [toggleAnimation, setToggleAnimation] = useState(false);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setToggleAnimation(!toggleAnimation);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LandingPageWrapper>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <h1>Bienvenido a !Que Rico!</h1>
          <h2>Tapas på Kungsholmen</h2>
          <h4>Est. 2013</h4>
          <Link to={"/booking"} target="_blank">
            <RedButton>Boka bord</RedButton>
          </Link>
        </AnimationOnScroll>
        <ArrowDownLink href="#imageSection">
          <i className="fas fa-sort-down fa-lg"></i>
        </ArrowDownLink>
      </LandingPageWrapper>
      <LandingPageImageSection id="imageSection">
        <AnimationOnScroll
          animateIn={
            toggleAnimation
              ? "animate__fadeInLeftBig"
              : "animate__animated animate__fadeInLeft"
          }
        >
          <LandingPageTextMenu>
            <h3>
              Ta en titt på vår <Link to={"/meny"}>Meny</Link>
            </h3>
          </LandingPageTextMenu>
          <ImageDrinkDiv>
            <SpainImage src={SpainStairsSrc} alt="Image of Spain stairs" />
            <OrangeDrinkImage
              src={OrangeDrinkSrc}
              alt="Image of Drinks with oranges"
            />
          </ImageDrinkDiv>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn={
            toggleAnimation
              ? "animate__fadeInRightBig"
              : "animate__animated animate__fadeInRight"
          }
        >
          <LandinPageTextReservation>
            <h3>
              Är du sugen på hemmagjord Tapas? Klicka
              <Link to={"/booking"}> här </Link>för att boka bord
            </h3>
          </LandinPageTextReservation>
          <ImageTapasDiv>
            <MeatballsImage
              src={MeatballsSrc}
              alt="Image of Plate of Meatballs"
            />
            <TapasImage src={TapasSrc} alt="Image of Tapas" />
          </ImageTapasDiv>
        </AnimationOnScroll>
      </LandingPageImageSection>
    </>
  );
};

export default LandingPage;
