import styled from 'styled-components';

const FaqBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  width: 283px;
  margin-top: 20px;
  @media (max-width: 620px) {
    width: 100%;
  }
`;

const FaqImageWrapper = styled.div`
  position: relative;
`;

const FaqImage = styled.img`
  max-width: 100%;
`;

const FaqTextWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  padding: 24px 19px;
`;

const FaqText = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  word-break: break-all;
`;

//default props
FaqImage.defaultProps = {
  src: '',
};

export { FaqBoxContainer, FaqImageWrapper, FaqImage, FaqTextWrapper, FaqText };
