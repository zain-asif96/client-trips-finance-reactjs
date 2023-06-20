import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const MainRow = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: center;
`;

const DescriptionParagraph = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  margin-top: 11px;
  line-height: 20px;
  color: ${({ theme }) => theme.colorHostInfoBody};
`;

const ShowMore = styled.a`
  color: ${({ theme }) => theme.colorRed};
`;

export { Container, MainRow, DescriptionParagraph, ShowMore };
