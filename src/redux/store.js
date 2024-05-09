import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";
import resultSlice from "./resultSlice";

const store = configureStore({
    reducer : {
        questionSlice,
        resultSlice
    }
})

export default store