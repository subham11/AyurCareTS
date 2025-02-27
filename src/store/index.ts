// src/store/index.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

export default store;
