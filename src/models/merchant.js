export const getMerchantById = (merchants, merchantId) =>
  merchants.find(merchant => merchant.id === merchantId);
