import React, { useEffect, useState } from 'react';
import ImageOne from '../../../../../assets/images/collage-image-one.png';
import ImageTwo from '../../../../../assets/images/collage-image-two.png';
import ImageThree from '../../../../../assets/images/collage-image-three.png';
import ImageFour from '../../../../../assets/images/collage-image-four.png';
import ImageFive from '../../../../../assets/images/collage-image-five.png';
import { Container, MainRow } from './ImageCollageStyle';
import { ReactPhotoCollage } from 'react-photo-collage';

const IMAGE_DATA = {
  // donot remove this
  width: '1280px',
  height: ['500px', '200px'],
  layout: [1, 4],
  photos: [
    {
      source: '',
    },
  ],
  showNumOfRemainingPhotos: true,
};

const ImageCollage: React.FC<{ imagePaths: string[] }> = ({
  imagePaths,
}: {
  imagePaths: string[];
}) => {
  const [imageData, setImageData] = useState(IMAGE_DATA);

  useEffect(() => {
    const images = imagePaths.length
      ? imagePaths.map((imgSrc) => ({ source: imgSrc }))
      : [...IMAGE_DATA.photos];
    const layoutCount = images.length > 4 ? 4 : images.length;
    setImageData({
      ...IMAGE_DATA,
      photos: images,
      layout: images.length > 1 ? [1, layoutCount] : [1],
    });
  }, [imagePaths]);

  return (
    <Container>
      <MainRow>
        <ReactPhotoCollage {...imageData} />
      </MainRow>
    </Container>
  );
};

export default ImageCollage;
