import {
  LandingPageImageSection,
  LandingPageWrapper,
  SpainImage,
  OrangeDrinkImage,
} from "./styles/landingPage";
import SpainStairsSrc from "../assets/espana.jpg";
import OrangeDrinkSrc from "../assets/orangedrink.jpg";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <LandingPageWrapper>
        <Navbar />
        <div>
          <h1>Bienvenido!</h1>
          <h2>Que Rico din restaurang på Kungsholmen!</h2>
        </div>
      </LandingPageWrapper>
      <LandingPageImageSection>
        <SpainImage src={SpainStairsSrc} alt="Spain stairs" />
        <OrangeDrinkImage src={OrangeDrinkSrc} />
      </LandingPageImageSection>
    </>
  );
};

export default LandingPage;
