import styled from "styled-components";
import BackgroundImgLanding from "../../assets/landingpage-bg.png";

export const LandingPageWrapper = styled.div`
  color: white;
  background: url(${BackgroundImgLanding}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const LandingPageImageSection = styled.section`
  background: #670101;
`;

export const SpainImage = styled.img`
  width: 400px;
  height: 200px;
  padding: 10px;
`;

export const OrangeDrinkImage = styled.img`
  width: 300px;
  height: 400px;
  padding: 10px;
`;
