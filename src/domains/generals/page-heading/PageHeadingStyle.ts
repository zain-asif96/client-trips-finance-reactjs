import styled from 'styled-components';

const Container = styled.main`
  // max-width: 1280px;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
`;

const MainRow = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1em;
`;

const MainHeadingLeft = styled.h1`
  font-size: 72px;
  @media (max-width: 767px) {
    font-size: 50px;
  }
`;

const MainHeadingCenter = styled.h1`
  font-size: 72px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 50px;
  }
`;

const SubtitileLeft = styled.h1`
  color: #e54d42;
  font-size: 16px;
  text-align: left;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const SubtitileCenter = styled.h1`
  color: #e54d42;
  font-size: 16px;
  text-align: center;
  line-height: normal;
  margin-top: 20px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const ShadowText = styled.h1`
  font-size: 140px;
  opacity: 0.04;
  position: absolute;
  left: 0;
  right: 0;
  @media (max-width: 767px) {
    font-size: 100px;
  }
  @media (max-width: 767px) {
    font-size: 70px;
  }
  @media (max-width: 520px) {
    font-size: 60px;
  }
`;

const ShadowTextCenter = styled.h1`
  font-size: 140px;
  opacity: 0.04;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  @media (max-width: 767px) {
    font-size: 70px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
`;

export {
  Container,
  MainRow,
  MainHeadingLeft,
  MainHeadingCenter,
  SubtitileLeft,
  SubtitileCenter,
  ShadowText,
  ShadowTextCenter,
};
