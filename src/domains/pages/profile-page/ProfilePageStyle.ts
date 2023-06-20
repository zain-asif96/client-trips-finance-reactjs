import styled from 'styled-components';

const Container = styled.main`
  // max-width: 1280px;
  width: 100%;
  padding: 0 1em;
`;

const MainRow = styled.div`
  max-width: 1280px;
  margin: 80px auto;
  width: 100%;
  padding: 0 1em;

  @media (max-width: 767px) {
    margin: 40px auto;
  }
`;

const SelectedTab = styled.p`
  border-bottom: 3px solid red;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
`;

const UnSelectedTab = styled.p`
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
`;

const ContainerWrapper = styled.p`
  margin-top: 50px;
`;

const TabbarView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: block;
  }
`;

export {
  Container,
  MainRow,
  SelectedTab,
  UnSelectedTab,
  ContainerWrapper,
  TabbarView,
};
