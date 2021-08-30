import { HeadingWrapper } from "./styles/global";
import { TapasMenuHeader, TapasMenuWrapper } from "./styles/tapasMenu";

const TapasMenu = () => {
  return (
    <>
      <TapasMenuHeader>
        <HeadingWrapper>
          <h1>Tapas Meny</h1>
        </HeadingWrapper>
      </TapasMenuHeader>
      <TapasMenuWrapper>
        <ul>
          <li>Pan con Ajo / 29 kr</li>
          <small>Vitlöksbröd</small>
          <li>Patatas con Aioli / 49 kr</li>
          <small>Friteras potatis med Aioli</small>
          <li>Chorizo a la Asturiana / 69 kr</li>
          <small>Stekt stark spansk chorizo med cider & tomat</small>
          <li>Champiñones al Ajillo / 59 kr</li>
          <small>Champinjoner frästa i vitlök, vitt vin & persilja</small>
          <li>Gambas al Ajillo / 69 kr</li>
          <small>Vitlöksstekta tigerräkor i vitt vin</small>
          <li>Mejillones / 69 kr</li>
          <small>Ostgratinerade musslor med tomat och jalapeño</small>
          <li>Fajita de Pollo / 69 kr</li>
          <small>
            Tortillabröd med strimlad kycklingfile, ost, guacamole och
            vitlökskräm
          </small>
          <li>Pimiento del Padron / 59 kr</li>
          <small>Stekta mini chilipaprikor</small>
        </ul>
      </TapasMenuWrapper>
    </>
  );
};

export default TapasMenu;
