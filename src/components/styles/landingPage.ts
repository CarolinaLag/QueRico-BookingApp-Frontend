import styled from "styled-components";
import BackgroundImgLanding from "../../assets/landingpage-bg.png";

export const LandingPageWrapper = styled.div`
  color: white;
  background: url(${BackgroundImgLanding}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    border-bottom: 1px solid white;
    padding: 10px;
  }
`;

export const ArrowDownLink = styled.a`
  position: absolute;
  margin-top: 650px;
  font-size: 20px;
  color: white;

  @media screen and (min-width: 1024px) {
    position: absolute;
    margin-top: 670px;
    font-size: 30px;
  }
`;

export const LandingPageImageSection = styled.section`
  background: #670101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ImageDrinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ImageTapasDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const LandingPageTextMenu = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #eebc1d;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    position: absolute;
    top: 50%;
  }
`;

export const LandinPageTextReservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-left: 40px;
  color: white;
  a {
    color: #eebc1d;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    padding-left: 100px;
    padding-top: 100px;
  }
`;

export const SpainImage = styled.img`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const OrangeDrinkImage = styled.img`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  height: 400px;
  padding: 10px;
  margin: 10px;
`;

export const MeatballsImage = styled.img`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  height: 400px;
  padding: 10px;
  margin: 10px;
`;

export const TapasImage = styled.img`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
