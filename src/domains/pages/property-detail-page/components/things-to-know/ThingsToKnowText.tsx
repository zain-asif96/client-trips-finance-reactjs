import React, { useEffect, useState } from 'react';
import ShowMoreButton from '../../../../common/ShowMoreButton';

import { ThingsToKnowText } from './ThingsToKnowTextStyle';

interface Props {
  textString: string;
}

const Text: React.FC<Props> = ({ textString }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showingMore, setShowingMore] = useState<boolean>(false);

  useEffect(() => {
    if (textString.length >= 70) {
      setShow(true);
    }

    if (text.length >= 70) {
      setText(textString);
    } else {
      setText(textString.substring(0, 69));
    }
  }, []);

  const toggle = () => {
    if (showingMore) {
      setText(text.substring(0, 69));
      setShowingMore(false);
    } else {
      setText(textString);
      setShowingMore(true);
    }
  };

  return (
    <ThingsToKnowText>
      {text}{' '}
      {show ? (
        <ShowMoreButton
          text={showingMore ? 'Show less' : 'Show more'}
          toggle={toggle}
        />
      ) : null}
    </ThingsToKnowText>
  );
};

export default Text;
