import * as merchantModel from '../../models/merchant';

export const getAllMerchants = state => state.merchants;

export const getMerchantById = (state, merchantId) => 
    merchantModel.getMerchantById(getAllMerchants(state), merchantId);

