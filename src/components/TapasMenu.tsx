import { TapasMenuHeader, TapasMenuWrapper } from './styles/tapasMenu';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TapasMenu = () => {
  return (
    <>
      <TapasMenuHeader>
        <h1>Tapas Meny</h1>
      </TapasMenuHeader>
      <TapasMenuWrapper>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <ol>
            <li>Pan con Ajo | 29 kr</li>
            <small>Vitlöksbröd</small>
            <li>Patatas con Aioli | 49 kr</li>
            <small>Friterad potatis med Aioli</small>
            <li>Chorizo a la Asturiana | 69 kr</li>
            <small>Stekt stark spansk chorizo med cider & tomat</small>
            <li>Champiñones al Ajillo | 59 kr</li>
            <small>Champinjoner frästa i vitlök, vitt vin & persilja</small>
            <li>Gambas al Ajillo | 69 kr</li>
            <small>Vitlöksstekta tigerräkor i vitt vin</small>
            <li>Mejillones | 69 kr</li>
            <small>Ostgratinerade musslor med tomat och jalapeño</small>
            <li>Fajita de Pollo | 69 kr</li>
            <small>
              Tortillabröd med strimlad kycklingfile, ost, guacamole och
              vitlökskräm
            </small>
            <li>Pimiento del Padron | 59 kr</li>
            <small>Stekta mini chilipaprikor</small>
          </ol>
        </AnimationOnScroll>
      </TapasMenuWrapper>
    </>
  );
};

export default TapasMenu;
