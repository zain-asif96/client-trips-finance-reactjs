import styled from 'styled-components';

const Ul = styled.ul<{ open: any }>`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 0 25px;
    :last-child {
      padding-right: 0;
    }
    :first-child {
      padding-left: 0;
    }
    @media (max-width: 900px) {
      padding: 5px 0px;
      border-bottom: 2px solid white;
      width: 100%;
      margin-bottom: 30px;
      :last-child {
        border-bottom: none;
      }
    }
  }
  @media (max-width: 900px) {
    z-index: 999999;
    overflow-y: scroll;
    flex-flow: column nowrap;
    background-color: #353535;
    position: fixed;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 50px 30px 15px;
    box-shadow: rgb(0 0 0 / 8%) 10px 0px 16px 0px;
    transition: all 0.3s linear 0s;
    li {
      color: #fff;
    }
  }
`;

const AnchorTag = styled.a`
  font-family: ${({ theme }) => theme.fontFamily2};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #e54d42;
  }
  @media (max-width: 900px) {
    color: #ffffff;
    line-height: 35px;
  }
`;

const SearchIcon = styled.img`
  color: #a7a7a7;
  position: absolute;
  top: 0;
  left: 20px;
  margin: auto;
  bottom: 0;
  width: 16px;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 13px 20px 13px 45px;
  color: #353535;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 40px;
  width: 100%;
  height: 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily2};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #353535;
  }
  :-ms-input-placeholder {
    color: #353535;
  }
  :focus {
    outline: none;
  }
`;

const ProfileView = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

const BorderSaperateLine = styled.div`
  border-right: 1px solid #e8e8e8;
  margin-right: 20px;
  height: 40px;
  width: 1px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const ProfileName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  cursor: pointer;
  @media (max-width: 900px) {
    color: #fff;
  }
`;

const EmailIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  background: #fff;
`;

const FoxIcon = styled.img`
  width: 38px;
  height: 38px;
  margin-left: 10px;
  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const ItemWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export {
  Ul,
  SearchInput,
  InputWrapper,
  SearchIcon,
  AnchorTag,
  ProfileImage,
  BorderSaperateLine,
  ProfileName,
  EmailIcon,
  FoxIcon,
  ProfileView,
  ItemWrapper,
};
