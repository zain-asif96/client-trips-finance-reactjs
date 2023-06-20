import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
  @media (max-width: 767px) {
    justify-content: stretch;
  }
`;

const TableWrapper = styled.table`
  margin-top: 46px;
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.fontFamily1};
  border-collapse: collapse;
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  border: 1px solid #bdbdbd;
  padding: 8px;
  height: 126px;
`;

const TableHeader = styled.th`
  padding: 20px;
  text-align: left;
  border: 1px solid #bdbdbd;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

export { Container, MainRow, TableWrapper, TableBody, TableRow, TableHeader };
