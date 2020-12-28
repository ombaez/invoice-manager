import { createSlice } from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {
    invoices: [],
  },
  reducers: {
    addInvoice: (state,action) => {
      state.invoices.push(action.payload)
    }
  },
});

export const { addInvoice } = invoiceSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectInvoices = state => state.invoices.invoices;

export default invoiceSlice.reducer;

