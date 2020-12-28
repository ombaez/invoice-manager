import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import invoiceReducer from '../features/invoices/invoiceSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    invoices:invoiceReducer
  },
});
