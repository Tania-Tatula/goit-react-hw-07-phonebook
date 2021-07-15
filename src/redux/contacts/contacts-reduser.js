import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from './contacts-actions';


const items = createReducer([], {
    [actions.fetchContactsSuccess]: (_, { payload }) => payload,
    [actions.addContactSuccess]: (state, { payload }) => state.map(contact => contact.name).includes(payload.name)
    ? alert(`${payload.name} is already in contacts.`)
    : [payload, ...state],
    [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});



const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
})


export default combineReducers({
  items,
  filter,
});
