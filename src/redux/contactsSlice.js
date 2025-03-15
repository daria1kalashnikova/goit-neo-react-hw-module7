import { createSelector, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contactData) {
        return {
          payload: {
            id: nanoid(),
            ...contactData,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      })
      .addMatcher(
        ({ type }) => type.endsWith("pending"),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("rejected"),
        (state) => {
          state.error = true;
          state.loading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("fulfilled"),
        (state) => {
          state.loading = false;
        }
      ),
});

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
