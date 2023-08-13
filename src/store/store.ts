import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredients-slice";
import  modalReducer  from "./modal-slice";
import consctructorReducer from "./consctructor-slice";
import userReducer from "./user-slice"


const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    modal: modalReducer,
    burgerConstructor: consctructorReducer,
    user: userReducer
  }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;