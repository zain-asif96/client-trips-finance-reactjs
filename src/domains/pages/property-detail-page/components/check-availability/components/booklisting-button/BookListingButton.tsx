import React from 'react';
import {
  BookListingBtn,
  BookListingBtnContainer,
} from './BookListingButtonStyle';

interface Props {
  onClick: VoidFunction;
  makeDisabled: boolean;
}

const BookListingButton: React.FC<Props> = ({
  onClick,
  makeDisabled = false,
}: Props) => (
  <BookListingBtnContainer>
    <BookListingBtn onClick={() => onClick()} disabled={makeDisabled}>
      Request NFT
    </BookListingBtn>
  </BookListingBtnContainer>
);

export default BookListingButton;
