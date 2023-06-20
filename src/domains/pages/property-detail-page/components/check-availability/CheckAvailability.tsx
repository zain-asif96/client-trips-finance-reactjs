import React, { useEffect, useState } from 'react';
import RightIconInputField from '../../../../generals/right_icon_input_field/RightIconInputField';
import StarIcon from '../../../../../assets/images/star-rating-red.png';
import {
  BookListingBoxWrapper,
  BoxContentWrapper,
  RateContent,
  RateSpan,
  ReviewContent,
  ReviewIcon,
  ReviewSpan,
} from './CheckAvailabilityStyle';
import BookListingButton from './components/booklisting-button/BookListingButton';
import CalendarInput from '../../../../calendar/ListingCalendar/CalendarInput/CalendarInput';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import {
  requestNFT,
  requestNFTSuccess,
} from '../../../../../state/properties/propertiesActions';
import { CenterLoading } from '../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';
import { RequestSubmittedText } from './components/booklisting-button/BookListingButtonStyle';

const BookListing: React.FC = (props: any) => {
  const [showCalender, setshowCalender] = useState<{
    checkIn: boolean;
    checkOut: boolean;
  }>({
    checkIn: false,
    checkOut: false,
  });

  const {
    root,
    authReducer: auth,
    propertiesReducer: properties,
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const [guests, setGuests] = useState('');

  const [dates, setDates] = useState<{ checkIn: string; checkOut: string }>({
    checkIn: '',
    checkOut: '',
  });

  useEffect(() => {
    return () => {
      dispatch(requestNFTSuccess(false));
    };
  }, []);

  // empty states on success
  useEffect(() => {
    if (!properties.requestNFtSubmitted) {
      return;
    }
    setDates({
      checkIn: '',
      checkOut: '',
    });
    setGuests('');
  }, [properties.requestNFtSubmitted]);

  const updateValue = (date: Date, type: string) => {
    setDates({ ...dates, [type]: new Date(date).toDateString() });
    setshowCalender({ ...showCalender, [type]: false });
  };

  const submitForm = () => {
    if (!checkFormValid()) return;

    const params = {
      propertyId: +props?.propertyId,
      requesterId: auth.user.id || 1,
      guests,
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
    };

    dispatch(requestNFT(params));
  };

  const checkFormValid = () => {
    return !!(guests && dates.checkIn && dates.checkOut);
  };

  const tileDisabled = ({ date, view }: any) => {
    const calenderDate = new Date(date).toDateString();
    return props?.blackoutDays.find(
      (dDate: any) => calenderDate === new Date(dDate).toDateString(),
    );
  };

  return (
    <BookListingBoxWrapper>
      <BoxContentWrapper>
        <RateContent>
          ${props?.price}/ <RateSpan> night </RateSpan>
        </RateContent>
        <ReviewContent>
          <ReviewIcon src={StarIcon} />{' '}
          <ReviewSpan>{props.royaltyRate} (8 reviews)</ReviewSpan>
        </ReviewContent>
      </BoxContentWrapper>
      <CalendarInput
        onChange={(date: Date) => updateValue(date, 'checkIn')}
        showCalender={showCalender.checkIn}
        toggleCalender={() =>
          setshowCalender({ checkOut: false, checkIn: !showCalender.checkIn })
        }
        value={dates.checkIn}
        placeholder={'Check in:'}
        tileDisabled={tileDisabled}
        minDate={new Date()}
        maxDate={dates.checkOut ? new Date(dates.checkOut) : ''}
      />
      <CalendarInput
        onChange={(date: Date) => updateValue(date, 'checkOut')}
        showCalender={showCalender.checkOut}
        toggleCalender={() =>
          setshowCalender({ checkIn: false, checkOut: !showCalender.checkOut })
        }
        value={dates.checkOut}
        placeholder={'Check out:'}
        tileDisabled={tileDisabled}
        minDate={dates.checkIn ? new Date(dates.checkIn) : new Date()}
      />

      <RightIconInputField
        placeholder="Guests:"
        onChange={(value) => setGuests(value)}
        value={guests}
        type="number"
      />

      {root.actionCIP ? (
        <CenterLoading>
          <CircleLoader />
        </CenterLoading>
      ) : (
        <BookListingButton
          onClick={() => submitForm()}
          makeDisabled={!checkFormValid()}
        />
      )}

      {properties.requestNFtSubmitted && (
        <RequestSubmittedText>
          Property requested! Please check the Inbox in your Profile to see the
          status of the request and to chat with the property owner.
        </RequestSubmittedText>
      )}
    </BookListingBoxWrapper>
  );
};

export default BookListing;
