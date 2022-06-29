import { combineReducers } from "@reduxjs/toolkit";
import uploadSlice from './upload';


const rootReducer = combineReducers({
  upload: uploadSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;