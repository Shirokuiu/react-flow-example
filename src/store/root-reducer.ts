import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'src/services/api';
import { SliceNameSpace } from 'src/store/constants';
import { flowSlice } from 'src/store/slices/flow-slice/flow-slice';
import { mainPageSlice } from 'src/store/slices/main-page-slice/main-page-slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [SliceNameSpace.MainPage]: mainPageSlice.reducer,
  [SliceNameSpace.FlowSlice]: flowSlice.reducer,
});
