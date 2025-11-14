import { configureStore } from "@reduxjs/toolkit";
import seatReducer from '../features/seats/seatSlices';

const store = configureStore({
    reducer: {
        seats: seatReducer,
    },
});

export default store;