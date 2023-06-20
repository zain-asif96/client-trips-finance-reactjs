import { makeVar, InMemoryCache } from '@apollo/client';
import { PROPERTY_DETAILS } from '../domains/common/constant';
import { HOT_DEALS_DATA } from '../domains/pages/home-page/components/hot-deals/HotDeals';
import { HOT_DEALS_LOCALE_DATA } from '../domains/pages/property-listing-page/components/property-listing/PropertyListing';
import { Property } from '../state/profile/profileActionsType';

export const hotDealsVar = makeVar<any[]>(HOT_DEALS_DATA);
export const newPropertyVar = makeVar<any>(HOT_DEALS_LOCALE_DATA[0]);
export const myListingsVar = makeVar<any[]>(HOT_DEALS_LOCALE_DATA);
export const myBookingsVar = makeVar<any[]>(HOT_DEALS_LOCALE_DATA);
export const listingVar = makeVar<Property>(PROPERTY_DETAILS);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        hotDeals: {
          read() {
            return hotDealsVar();
          },
        },
        listing: {
          read() {
            return listingVar();
          },
        },
      },
    },
  },
});
