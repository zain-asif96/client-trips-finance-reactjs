import styled from 'styled-components';
import BannerBgImage from '../../../assets/images/browser-banner-bg.png';

const Container = styled.main`
  width: 100%;
`;

const BannerBg = styled.div`
  background: url(${BannerBgImage});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 630px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 40px;
`;

const BannerBoxContainer = styled.div`
  max-width: 1280px;
  margin: 30px auto 0;
  width: 100%;
  padding: 0 1em;
`;

const BannerBoxRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1215px) {
    flex-direction: column;
  }
`;

const MainRow = styled.div`
  max-width: 1280px;
  margin: 0 auto 80px;
  width: 100%;
  padding: 0 1em;
  margin-top: 50px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export { Container, BannerBg, BannerBoxContainer, BannerBoxRow, MainRow };
