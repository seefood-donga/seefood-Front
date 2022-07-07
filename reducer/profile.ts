import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  imageUrl: string;
  nickname: string;
  height: number;
  weight: number;
} = {
  imageUrl: "",
  nickname: "",
  height: 0,
  weight: 0,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setImageUrl(state, action) {
      state.imageUrl = action.payload;
    },
    deleteImageUrl(state, action) {
      state.imageUrl = "";
    },
    setNickname(state, action) {
      state.nickname = action.payload;
    },
    setHeight(state, action) {
      state.height = action.payload;
    },
    setWeight(state, action) {
      state.weight = action.payload;
    },
  },
});

export default profileSlice;
