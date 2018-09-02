export const getPrefix = item => `${item.firstName} ${item.lastName}`.match(/\b(\w)/g).join('');
