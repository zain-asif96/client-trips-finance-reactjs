# Onboard JS

A wrapper around the [Onboard](https://docs.blocknative.com/onboard) react library which gives you easy access to metamask as well as a host of other common wallet formats.
This is a common library used in many ethereum dapps.

## Usage

This has a single component, the `OnboardService`, which can be instantiated inside or outside of React,
though the onboard library requires React for its UI. From here you can dispatch state updates to your store with
a built in callback function on init.

```js
const onboard = OnboardService((state) => {
  // service has a callback which is called on state changes, useful to pass into a dispatch or setstate.
  store.dispatch({
    type: 'onboardChange',
    payload: state,
  });
});

// pass in the network id you want to connect to, by default its 1 (mainnet)
await onboard.connect(1);
await onboard.disconnect();
```

## Examples

See example usage in `CreateBookingPage` and `email-verification/components/step1/Step1.tsx`
