import { PropertyProps } from '../../state/properties/propertiesActionsType';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const checkForRequiredField = (
  field: string,
  value: string | { value: string } | string[],
  formLabels: any,
): string => {
  const isInvalid = Array.isArray(value)
    ? !value.length
    : typeof value !== 'string'
    ? !value.value
    : !value;
  return isInvalid ? `${formLabels[field]} is required` : '';
};

export const checkFormValid = (
  formValue: any,
  errorState: any,
  setErrorState: any,
  formLabels: any,
): boolean => {
  let isValid = true;
  const errorForm: any = { ...errorState };
  for (const [key, value] of Object.entries(errorForm)) {
    const isObject = typeof value === 'object';
    if (isObject) {
      for (const [subKey, subValue] of Object.entries(value as any)) {
        const isValidForm = isValidProperty(
          formValue[key][subKey],
          subKey,
          formLabels,
          errorForm,
          subValue,
          key,
        );
        if (!isValidForm) {
          isValid = false;
        }
      }
    } else {
      const isValidForm = isValidProperty(
        formValue[key],
        key,
        formLabels,
        errorForm,
        value,
        '',
      );
      if (!isValidForm) {
        isValid = false;
      }
    }
  }
  setErrorState((prev: any) => ({
    ...prev,
    ...errorForm,
  }));
  return isValid;
};

const isValidProperty = (
  value: any,
  key: string,
  formLabels: any,
  errorForm: any,
  errorValue: any,
  parentKey: string,
) => {
  const isInvalid = Array.isArray(value) ? !value?.length : !value;
  const alreadyHasKey = parentKey
    ? formLabels[parentKey][key]
    : formLabels[key];
  if (isInvalid && alreadyHasKey) {
    if (parentKey) {
      errorForm[parentKey][key] =
        errorForm[parentKey][key] ||
        checkForRequiredField(key, errorValue as string, formLabels[parentKey]);
    } else {
      errorForm[key] =
        errorForm[key] ||
        checkForRequiredField(key, errorValue as string, formLabels);
    }
    return false;
  }
  return true;
};

export const setFieldValues = (
  field: string,
  value: string | string[] | any,
  parentType: string,
  formLabels: any,
  setFormErrorState: any,
  formData: PropertyProps,
  updateData: any,
) => {
  const errMessage = checkForRequiredField(field, value, formLabels);

  setFormErrorState((prev: any) => {
    const errors = { ...prev };
    if (parentType) {
      errors[parentType][field] = errMessage;
    } else {
      errors[field] = errMessage;
    }
    return errors;
  });
  let updatedData: PropertyProps = {
    ...formData,
    address: {
      ...formData.address,
    },
    baseListing: {
      ...formData.baseListing,
    },
  };
  if (parentType === 'baseListing') {
    updatedData.baseListing = {
      ...updatedData.baseListing,
      [field]: value,
    };
  } else if (parentType === 'address') {
    updatedData.address = {
      ...updatedData.address,
      [field]: value,
    };
  } else {
    updatedData = {
      ...updatedData,
      [field]: value,
    };
  }
  if (updateData) updateData(updatedData);
};
