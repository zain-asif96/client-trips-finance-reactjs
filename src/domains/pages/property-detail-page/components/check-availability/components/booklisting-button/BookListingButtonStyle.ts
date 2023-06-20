import styled from 'styled-components';

const BookListingBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const BookListingBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #e54d42;
  border-radius: 10px;
  width: 100%;
  height: 51px;
  padding: 15px 40px;
  cursor: pointer;
`;

const RequestSubmittedText = styled.div`
  font-size: 20px;
  color: green;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

export { BookListingBtnContainer, BookListingBtn, RequestSubmittedText };
