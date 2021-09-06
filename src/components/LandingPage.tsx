import {
  LandingPageImageSection,
  LandingPageWrapper,
  SpainImage,
  OrangeDrinkImage,
  MeatballsImage,
  TapasImage,
  ImageDiv1,
} from "./styles/landingPage";
import SpainStairsSrc from "../assets/espana.jpg";
import OrangeDrinkSrc from "../assets/orangedrink.jpg";
import MeatballsSrc from "../assets/albondigas.jpg";
import TapasSrc from "../assets/tapas.jpg";
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
          <ImageDiv1>
            <SpainImage src={SpainStairsSrc} alt="Image of Spain stairs" />
            <OrangeDrinkImage
              src={OrangeDrinkSrc}
              alt="Image of Drinks with oranges"
            />
          </ImageDiv1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <ImageDiv1>
            <MeatballsImage
              src={MeatballsSrc}
              alt="Image of Plate of Meatballs"
            />
            <TapasImage src={TapasSrc} alt="Image of Tapas" />
          </ImageDiv1>
        </AnimationOnScroll>
      </LandingPageImageSection>
    </>
  );
};

export default LandingPage;
