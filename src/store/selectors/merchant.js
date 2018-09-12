import * as merchantModel from '../../models/merchant';
import isEmpty from 'lodash/isEmpty';

export const getAllMerchants = state => state.merchants;

export const getMerchantById = (state, merchantId) => 
    merchantModel.getMerchantById(getAllMerchants(state), merchantId);

export const getSortedBids = (merchant, {sortingType}) => {
    if (isEmpty(merchant)) return [];
    const {bids} = merchant;

    if(sortingType === 'title'){
        return bids.sort(function(a, b){
            const nameA=a.carTitle.toLowerCase();
            const nameB=b.carTitle.toLowerCase()

            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0;
        })
    }

    if(sortingType === 'asc'){
        return bids.sort(function(a, b){
            const dateA=new Date(a.created); 
            const dateB =new Date(b.created);

            return dateA-dateB;
        });
    }

    if(sortingType === 'desc'){
        return bids.sort(function(a, b){
            const dateA=new Date(a.created); 
            const dateB =new Date(b.created);
            
            return dateB-dateA;
        });
    }

    return bids;
}