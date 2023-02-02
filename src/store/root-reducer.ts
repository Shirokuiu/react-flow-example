import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'src/services/api';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
