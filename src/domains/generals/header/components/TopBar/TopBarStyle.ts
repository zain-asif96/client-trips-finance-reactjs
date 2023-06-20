import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: #e54d42;
  padding: 13px 1em;
`;
const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1em;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 690px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const SocialInfoWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  @media (max-width: 590px) {
    display: none;
  }
`;

const EmailWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const Icon = styled.img`
  width: 16px;
`;

const EmailText = styled.a`
  font-family: ${({ theme }) => theme.fontFamily2};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: #ffffff;
  margin-left: 8px;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 690px) {
    margin-top: 20px;
  }
  @media (max-width: 590px) {
    margin-top: 0;
  }
`;

const LoginInnerWrapper = styled.button`
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const LoginIcon = styled.img`
  width: 15px;
`;

const LoginText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily2};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  display: block;
  margin-left: 8px;
`;

const SignupText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily2};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  display: block;
`;

const VerticalBorder = styled.div`
  height: 17px;
  background: #ffffff;
  width: 2px;
  margin: 0 19px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  @media (max-width: 590px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const SocialIconsHeader = styled.img`
  max-width: 100%;
  width: 80%;
  margin: 0 auto;
`;

const SocialIconLinks = styled.a`
  margin-right: 30px;
  :last-child {
    margin-right: 0;
  }
  ::hover {
    text-decoration: none;
  }
`;

export {
  Container,
  MainRow,
  SocialInfoWrapper,
  EmailWrapper,
  Wrapper,
  Icon,
  EmailText,
  LoginWrapper,
  LoginInnerWrapper,
  LoginIcon,
  LoginText,
  SignupText,
  VerticalBorder,
  SocialIconsWrapper,
  SocialIconLinks,
  SocialIconsHeader,
};
