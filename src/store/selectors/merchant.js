// import { createSelector } from 'reselect';

// import * as merchantModel from '../../models/merchant';

export const getAllMerchants = state => state.merchants;

export const getMerchantById = (state, merchantId) => state.merchants.find(merchant => merchant.id === merchantId);

