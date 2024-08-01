import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectNameFilter = state => state.filters.name;
const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    console.log(1);

    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
      ) || []
    );
  }
);
