import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const lowerCasedFilter = filter?.toLowerCase() || '';
    return (
      contacts?.filter(
        contact =>
          contact.name.toLowerCase().includes(lowerCasedFilter) ||
          contact.number.toLowerCase().includes(lowerCasedFilter)
      ) || []
    );
  }
);
