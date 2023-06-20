import styled from 'styled-components';

const LogoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  width: 283px;
  margin-top: 20px;
`;

const LogoImageWrapper = styled.div`
  position: relative;
  height: 201px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 84px;
  max-width: 100%;
`;

const LinkBox = styled.div`
  background-color: #353535;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  padding: 24px 19px;
`;

const LinkText = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  word-break: break-all;
`;

//default props
LogoImage.defaultProps = {
  src: '',
};

export { LogoBoxContainer, LogoImageWrapper, LogoImage, LinkBox, LinkText };
