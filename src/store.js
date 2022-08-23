import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootred from "./reducers/combine"
import api from "./middleware/api";

export const store = configureStore({
        reducer: rootred,
        
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),

})