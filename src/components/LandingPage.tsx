import {
  LandingPageImageSection,
  LandingPageWrapper,
  SpainImage,
  OrangeDrinkImage,
} from "./styles/landingPage";
import SpainStairsSrc from "../assets/espana.jpg";
import OrangeDrinkSrc from "../assets/orangedrink.jpg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const LandingPage = () => {
  return (
    <>
      <LandingPageWrapper>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <h1>Bienvenido!</h1>
          <h2>Que Rico din restaurang på Kungsholmen!</h2>
        </AnimationOnScroll>
      </LandingPageWrapper>
      <LandingPageImageSection>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <SpainImage src={SpainStairsSrc} alt="Spain stairs" />
          <OrangeDrinkImage src={OrangeDrinkSrc} alt="Drinks with oranges" />
        </AnimationOnScroll>
      </LandingPageImageSection>
    </>
  );
};

export default LandingPage;
