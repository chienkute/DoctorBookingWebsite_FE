import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, userReducer);
// const store = configureStore({
//   reducer: {
//     user: persistedReducer,
//   },
// });
// const persistor = persistStore(store);
// const purgeStoredState = () => {
//   persistor.purge();
// };
// const updatePersistedData = (newData) => {
//   const currentState = persistor.getState();
//   persistor.pause();
//   persistor.persist();
//   persistor.updateState({ ...currentState, ...newData });
//   persistor.resume();
// };
// export { store, persistor };
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
