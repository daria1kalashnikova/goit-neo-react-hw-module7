import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "/src/redux/contactsSlice";
import filtersReducer from "/src/redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
