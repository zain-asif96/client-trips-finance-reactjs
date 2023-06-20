import styled from 'styled-components';

const DealsCardBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  margin-top: 35px;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 4px;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const RequestBoxWrapper = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 318px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 5px 20px 15px 20px;
`;

const DestinationImage = styled.img`
  width: 224px;
  max-width: 100%;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const RequestBoxView = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const RequestBoxText = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.5;
`;

const AmountText = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 2.5;
  color: #e54d42;
  text-align: right;
`;

const RequestUserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
`;
const ApproveButton = styled.button`
  background: #e54d42;
  border-radius: 3px;
  color: #fff;
  flex: 1;
  padding: 8px 2px;
  margin-right: 2px;
  font-size: 14px;
  text-align: center;
`;

const DenyButton = styled.button`
  flex: 1;
  border: 2px solid #e54d42;
  color: #e54d42;
  padding: 8px 2px;
  margin-left: 2px;
  font-size: 14px;
  text-align: center;
`;

const ChatButton = styled.button`
  background: #001f3f;
  border-radius: 3px;
  color: #fff;
  padding: 10px 2px;
  margin-right: 2px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin-top: 6px;
`;

//default props
DestinationImage.defaultProps = {
  src: '',
};

export {
  DealsCardBoxContainer,
  RequestBoxWrapper,
  RequestBoxView,
  RequestBoxText,
  RequestUserImage,
  AmountText,
  DenyButton,
  ApproveButton,
  ChatButton,
};
