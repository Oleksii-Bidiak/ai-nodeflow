import { baseApi } from '@/shared/api/baseApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
