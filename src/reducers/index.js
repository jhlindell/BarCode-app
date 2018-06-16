import { combineReducers } from 'redux';

function stockItemList(state = [], action){
  switch(action.type){
    case 'STOCK_ITEM_LIST':
      return action.payload;
    case 'CLEAR_STOCK_ITEM_LIST':
      return [];
    default:
      return state;
  }
}

function stockItem(state = null, action){
  switch(action.type){
    case 'SINGLE_STOCK_ITEM':
      return action.payload;
    case 'CLEAR_SINGLE_STOCK_ITEM':
      return null;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  stockItemList,
  stockItem
});

export default appReducer;