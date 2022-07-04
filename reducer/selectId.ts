import { createSlice } from "@reduxjs/toolkit";

const initialState: { seletedId: string } = {
  seletedId: "",
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selectId(state,action){
      state.seletedId = action.payload;
    }
  },
});

export default selectedSlice;
