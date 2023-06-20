import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: #ffffff;
  box-sizing: border-box;
  margin-top: 35px;
  align-items: center;
  position: relative;
  border-radius: 4px;
  flex: 1;
  height: 800px;
  @media (max-width: 1000px) {
    display: inline-block;
    height: 100%;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const MessageContainer = styled.div`
  flex: 3;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const TopHeader = styled.div`
  flex: 1;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;
  margin-bottom: 20px;
`;

const MessagerView = styled.div`
  margin: 0px 10px 40px 10px;
  display: flex;
  align-items: flex-start;
`;

const MessageBodyContainer = styled.div`
  overflow-y: auto;
  max-height: 80%;
  display: flex;
  flex-direction: column-reverse;
  min-height: 80%;
`;

const MessageBox = styled.div`
  margin: 0px 10px 20px 10px;
  position: absolute;
  bottom: 0px;
  width: 98%;
  display: flex;
`;

const MessagerTextView = styled.div`
  max-width: 70%;
  width: fit-content;
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 10px;
`;

const MessagerHeading = styled.h4`
  font-size: 15px;
  font-weight: 800;
`;

const MessagerText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.2;
`;
const MessgaerImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  margin-top: 6px;
`;

const UserView = styled.div`
  margin: 20px 10px 40px 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
`;

const UserTextView = styled.div`
  width: fit-content;
  max-width: 50%;
  margin-right: 15px;
  background: #e54d42;
  padding: 7px 10px;
  border-radius: 10px;
`;

const UserHeading = styled.h4`
  font-size: 15px;
  font-weight: 800;
  text-align: right;
`;

const UserText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
`;
const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 15px;
  margin-top: 6px;
`;

const ThreadContainer = styled.div`
  background: #fff;
  flex: 1.2;
  height: 100%;
  box-shadow: 0 4px 0px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 1000px) {
    height: auto;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

const TopHeaderThread = styled.div`
  flex: 1;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const RequestBoxWrapper = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 318px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 5px 20px 15px 20px;
  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-right: 0px;
    margin: auto;
    width: 80%;
  }
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

const SendButton = styled.button`
  background: #e54d42;
  border-radius: 3px;
  color: #fff;
  padding: 18px;
  font-size: 14px;
  text-align: center;
  margin: 2px 8px;
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

const TypeMessage = styled.textarea`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  font-size: 15px;
  width: 100%;
  border-radius: 5px;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

// default props
DestinationImage.defaultProps = {
  src: '',
};

export {
  RequestBoxWrapper,
  RequestBoxView,
  RequestBoxText,
  RequestUserImage,
  AmountText,
  DenyButton,
  ApproveButton,
  ChatButton,
  Container,
  MessageContainer,
  ThreadContainer,
  TopHeader,
  TopHeaderThread,
  MessagerView,
  MessagerTextView,
  MessagerHeading,
  MessagerText,
  MessgaerImage,
  UserView,
  UserImage,
  UserTextView,
  UserHeading,
  UserText,
  TypeMessage,
  MessageBox,
  MessageBodyContainer,
  SendButton,
};
