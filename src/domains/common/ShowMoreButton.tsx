import React from 'react';

import { Button } from '../common/ShowMoreButtonStyle';

interface Props {
  text: string;
  toggle: () => void;
}

const ShowMoreButton: React.FC<Props> = ({ text, toggle }: Props) => (
  <Button onClick={toggle}>{text}</Button>
);

export default ShowMoreButton;
