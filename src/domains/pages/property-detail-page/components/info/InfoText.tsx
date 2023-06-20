import React, { useEffect, useState } from 'react';
import ShowMoreButton from '../../../../common/ShowMoreButton';

import { Container, Title, Description } from './InfoTextStyle';

interface Props {
  infoTitle: string;
  infoDescription: string;
}

const InfoText: React.FC<Props> = ({ infoTitle, infoDescription }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showingMore, setShowingMore] = useState<boolean>(false);

  useEffect(() => {
    if (infoDescription.length >= 60) {
      setShow(true);
    }

    if (text.length >= 60) {
      setText(infoDescription);
    } else {
      setText(infoDescription.substring(0, 59));
    }
  }, []);

  const toggle = () => {
    if (showingMore) {
      setText(text.substring(0, 59));
      setShowingMore(false);
    } else {
      setText(infoDescription);
      setShowingMore(true);
    }
  };

  return (
    <Container>
      <Title>{infoTitle}</Title>
      <Description>
        {text}{' '}
        {show ? (
          <ShowMoreButton
            text={showingMore ? 'Show less' : 'Show more'}
            toggle={toggle}
          />
        ) : null}
      </Description>
    </Container>
  );
};

export default InfoText;
