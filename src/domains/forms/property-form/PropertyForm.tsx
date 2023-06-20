import React, { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  createBNFT,
  createProperty,
  getPropertyDetails,
} from '../../../state/properties/propertiesActions';
import {
  Amenity,
  HouseRule,
  PropertyProps,
} from '../../../state/properties/propertiesActionsType';
import { CenterLoading } from '../../pages/home-page/components/hot-deals/HotDealsStyle';

// Form Steps
// Note: import the components from ./components for each step in a form here
import Step1 from './components/step1/Step1';
import Step2 from './components/step2/Step2';
import Step3 from './components/step3/Step3';
import Step4 from './components/step4/Step4';
import Step5 from './components/step5/Step5';
// import Step6 from './components/step6/Step6';

// Note:
// Don't bother trying to abstract this form too much.
// Simply make a new component for each page and pass them in as steps to keep it nice and simple.
// We are happy for you to copy/paste this component as many times as needed for each use case.
// That may sound unintuitive, but we value DECOUPLING > DRY.
// So by all means, copy/paste rather than add imperative (hard to maintain) logic!

import { Container, MainRow } from './PropertyFormStyle';

const initialFormData = {
  address: {
    address1: '',
    address2: '',
    address3: '',
    city: '',
    postalCode: '',
    district: '',
    country: '',
  },
  baseListing: {
    name: '',
    price: 0,
    ownerNotes: '',
    description: '',
    extraPolicy: '',
    selfCheckPolicy: '',
    maxGuests: 0,
    type: '',
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
    royaltyRate: 0,
    checkIn: new Date().toDateString(),
    checkOut: new Date().toDateString(),
    status: '',
    propertyId: 1,
    paymentMethodId: 1,
    propertyOwnerPaymentMethodId: 1,
    renterPaymentMethodId: 1,
  },
  imagePaths: [],
  amenityIds: [],
  houseRuleIds: [],
};

// Put your various Step components here
const Steps = [Step1, Step2, Step3, Step4, Step5];

const BnftForm: React.FC<{ isBNFT?: boolean; propertyId?: string | any }> = ({
  isBNFT,
  propertyId,
}) => {
  const dispatch = useAppDispatch();
  const { root, propertiesReducer: property } = useAppSelector(
    (state) => state,
  );
  const [step, setStep] = useState<number>(0);

  const [data, setData] = useState<PropertyProps>(initialFormData);

  // For each form, make the data object whatever you need it to be.
  console.log(data);

  const updateData = (updatedData: PropertyProps) => {
    setData({ ...updatedData });
  };

  const previousStep = () => {
    setStep(Math.max(step - 1, 0));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    console.log('final data --->>> ', data);
    if (isBNFT) {
      const {
        name,
        price,
        ownerNotes,
        description,
        maxGuests,
        type,
        beds,
        bedrooms,
        bathrooms,
        royaltyRate,
        checkIn,
        checkOut,
        status,
        propertyId,
        paymentMethodId,
      } = data.baseListing;
      const propertyDetails = property.proprtyDetails;
      const createBNFTData = {
        listing: {
          ...propertyDetails,
          name,
          price,
          ownerNotes,
          description,
          bathrooms: bathrooms.value,
          bedrooms: bedrooms.value,
          beds: beds.value,
          maxGuests: maxGuests.value,
          type: type.value,
          royaltyRate,
          checkIn,
          checkOut,
          status,
          propertyId,
          renterPaymentMethodId: paymentMethodId,
          propertyOwnerPaymentMethodId: propertyDetails.paymentMethodId,
        },
        amenityIds: data.amenityIds.map((amenity: any) => amenity.value),
        houseRuleIds: data.houseRuleIds.map(
          (houseRule: any) => houseRule.value,
        ),
      };
      dispatch(createBNFT(createBNFTData));
    } else {
      // Trigger actions/hook to create Property
      const createPropertyData = {
        ...data,
        amenityIds: data.amenityIds.map((amenity: any) => amenity.value),
        houseRuleIds: data.houseRuleIds.map(
          (houseRule: any) => houseRule.value,
        ),
        baseListing: {
          name: data.baseListing.name,
          ownerNotes: data.baseListing.ownerNotes,
          description: data.baseListing.description,
          // status: data.baseListing.status,
          // propertyId: data.baseListing.propertyId,
          // propertyOwnerPaymentMethodId:
          //   data.baseListing.propertyOwnerPaymentMethodId,
          // renterPaymentMethodId: data.baseListing.renterPaymentMethodId,
          checkIn: new Date(),
          checkOut: new Date(),
          isMinted: true,
          price: Number(data.baseListing.price),
          royaltyRate: Number(data.baseListing.royaltyRate || 0),
          bathrooms: Number(data.baseListing.bathrooms.value),
          bedrooms: Number(data.baseListing.bedrooms.value),
          beds: Number(data.baseListing.beds.value),
          maxGuests: Number(data.baseListing.maxGuests.value),
          type: data.baseListing.type.value,
        },
      };
      dispatch(createProperty(createPropertyData));
    }
  };

  const Step = Steps[step];

  useEffect(() => {
    if (isBNFT) {
      dispatch(getPropertyDetails(propertyId));
    }
  }, [isBNFT]);

  useEffect(() => {
    if (isBNFT && property?.proprtyDetails) {
      const propertyDetails = property.proprtyDetails;
      const {
        maxGuests,
        type,
        beds,
        bedrooms,
        bathrooms,
        amenities,
        houseRules,
        checkIn,
        checkOut,
      } = propertyDetails.baseListing;
      setData({
        ...propertyDetails,
        baseListing: {
          ...propertyDetails.baseListing,
          maxGuests: { value: maxGuests, label: maxGuests },
          type: { value: type, label: type },
          beds: { value: beds, label: beds },
          bedrooms: { value: bedrooms, label: bedrooms },
          bathrooms: { value: bathrooms, label: bathrooms },
          checkIn: new Date(checkIn || new Date()).toDateString(),
          checkOut: new Date(checkOut || new Date()).toDateString(),
        },
        amenityIds: amenities.map((amenity: Amenity) => ({
          value: amenity.id,
          label: amenity.name,
        })),
        houseRuleIds: houseRules.map((houseRule: HouseRule) => ({
          value: houseRule.id,
          label: houseRule.name,
        })),
      });
    }
  }, [property.proprtyDetails]);

  return (
    <Container>
      <MainRow>
        {root.isLoading && step === 5 ? (
          <CenterLoading>
            <CircleLoader />
          </CenterLoading>
        ) : (
          <Step
            previousStep={previousStep}
            nextStep={nextStep}
            handleSubmit={handleSubmit}
            updateData={updateData}
            formData={data}
            step={step}
            isBNFT={isBNFT || false}
          />
        )}
      </MainRow>
    </Container>
  );
};

export default BnftForm;
