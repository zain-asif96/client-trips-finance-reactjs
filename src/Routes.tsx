import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRootState } from './state/reducers';
import { useSelector } from 'react-redux';
import { PATHS } from './globals';
import BNFTCalendar from './domains/calendar/BNFT-Calendar/BNFTCalendar';
import BrowseMap from './domains/maps/Browse/BrowseMap';
import FinalPurchase from './domains/FinalPurchase/FinalPurchase';
import CreateBookingPage from './domains/pages/create-booking-page/CreateBookingPage';
import HomePage from './domains/pages/home-page/HomePage';
import PropertyListingPage from './domains/pages/property-listing-page/PropertyListingPage';
import PropertyDetailPage from './domains/pages/property-detail-page/PropertyDetailPage';
import CreateBNFTPage from './domains/pages/create-bnft-page/CreateBNFTPage';
import CreatePropertyPage from './domains/pages/create-property-page/CreatePropertyPage';
import DocsPage from './domains/pages/docs-page/DocsPage';
import CharitiesPage from './domains/pages/charities-page/CharitiesPage';
import ListingReviewPage from './domains/pages/listing-review-page/ListingReviewPage';
import ListingDisputePage from './domains/pages/listing-dispute-page/ListingDisputePage';
import InboxPage from './domains/pages/inbox-page/InboxPage';
import BrowserMarketPage from './domains/pages/browser-market-page/BrowserMarketPage';
import ProfilePage from './domains/pages/profile-page/ProfilePage';

const Routes: React.FC = () => {
  const { auth } = useSelector((state: IRootState) => state.authReducer);
  console.log({ auth });
  const isAuthenticated = !!auth;
  return (
    <Switch>
      <Route exact path={PATHS.home} component={HomePage} />
      <Route exact path={PATHS.BNFT} component={BNFTCalendar} />
      <Route exact path={PATHS.BrowseMap} component={BrowseMap} />
      <Route exact path={PATHS.FinalPurchase} component={FinalPurchase} />
      <Route exact path={PATHS.CreateBooking} component={CreateBookingPage} />
      <Route
        exact
        path={`${PATHS.PropertyListing}`}
        component={PropertyListingPage}
      />

      <Route
        exact
        path={`${PATHS.PropertyDetailPage}`}
        component={PropertyDetailPage}
      />
      <Route exact path={`${PATHS.CreateBNFT}`} component={CreateBNFTPage} />
      <Route
        exact
        path={`${PATHS.CreateProperty}`}
        component={CreatePropertyPage}
      />

      <Route exact path={`${PATHS.Faqs}`} component={DocsPage} />
      <Route exact path={`${PATHS.Charities}`} component={CharitiesPage} />
      <Route
        exact
        path={`${PATHS.ListingReview}`}
        component={ListingReviewPage}
      />
      <Route
        exact
        path={`${PATHS.ListingDispute}`}
        component={ListingDisputePage}
      />

      <Route exact path={`${PATHS.Inbox}`} component={InboxPage} />
      <Route
        exact
        path={`${PATHS.BrowserMarket}`}
        component={BrowserMarketPage}
      />
      <Route exact path={`${PATHS.Profile}`} component={ProfilePage} />
      {!isAuthenticated && (
        <>
          <Redirect from={PATHS.PropertyListing} to={PATHS.CreateBooking} />
          <Redirect from={PATHS.PropertyDetailPage} to={PATHS.CreateBooking} />
          <Redirect from={PATHS.CreateBNFT} to={PATHS.CreateBooking} />
          <Redirect from={PATHS.Inbox} to={PATHS.Profile} />
          <Redirect from={PATHS.Profile} to={PATHS.CreateBooking} />
          <Redirect from={PATHS.ListingDispute} to={PATHS.CreateBooking} />
          <Redirect from={PATHS.ListingDispute} to={PATHS.CreateBooking} />
          <Redirect from={PATHS.FinalPurchase} to={PATHS.CreateBooking} />
        </>
      )}
    </Switch>
  );
};
export default Routes;
