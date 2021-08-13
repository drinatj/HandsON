import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from './App';

export default configureStore({
    reducer: {
        myGiphy: searchReducer
    }
});