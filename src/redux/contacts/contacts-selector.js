import { createSelector } from "reselect";


const getValue = state =>  state.contacts.filter;
const getAllContacts = state => state.contacts.items;


// const getVisibleContacts = state => {
//     const filter = getValue(state);
//     const items = getAllContacts(state);

//     const filterLowerCase = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(filterLowerCase)
//   );
// }


const getVisibleContacts = createSelector(
    [getValue, getAllContacts], 
     (filter, items) => {
    const filterLowerCase = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filterLowerCase))
}
  );


export default {
    getValue,
    getVisibleContacts
}