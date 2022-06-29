import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {imageUrl: string, nowCategory: string, tags:string[] } = {
  imageUrl:"",
  nowCategory:"",
  tags:[],
};

const uploadSlice = createSlice({
  name:'upload',
  initialState,
  reducers:{
    setImageUrl(state, action) {
      state.imageUrl = action.payload;
    },
    deleteImageUrl(state, action) {
      state.imageUrl = "";
    },
    setCategory(state, action) {
      state.nowCategory = action.payload;
    },
    addTag(state, action: PayloadAction<string>) {
      state.tags = state.tags.concat(action.payload);
    },
    deleteTag(state, action) {
      state.tags = state.tags.filter(tag => tag !== action.payload);
    }
  }
});

export default uploadSlice;