import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { imageUrl: string } = {
  imageUrl: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice;
