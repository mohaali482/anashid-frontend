import { Middleware, configureStore } from "@reduxjs/toolkit";
import nasheedsReducer from "./ducks/nasheedSlice";
import userReducer from "./ducks/user-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootsaga";

let sagaMiddleware = createSagaMiddleware();
const localStorageMiddleware: Middleware = (storeApi) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("redux-state", JSON.stringify(storeApi.getState()));
  return result;
};

const middleware = [sagaMiddleware, localStorageMiddleware];
const reHydrateStore = () => {
  if (localStorage.getItem("redux-state") !== null) {
    return JSON.parse(localStorage.getItem("redux-state")!); // re-hydrate the store
  }
};

export const store = configureStore({
  reducer: {
    nasheeds: nasheedsReducer,
    user: userReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
