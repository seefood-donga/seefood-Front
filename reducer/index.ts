import { combineReducers } from "@reduxjs/toolkit";
import profileSlice from './profile';
import selectedSlice from './selectId';
import uploadSlice from './upload';


const rootReducer = combineReducers({
  upload: uploadSlice.reducer,
  profile: profileSlice.reducer,
  selected: selectedSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;