import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    image_url: "",
    likes: [],
    dislikes: [],
    reviews: [],
    ratings: [],
    isLogin: false,
  },
  reducers: {
    addLogin(state, action) {
      state.username = action.payload.username;
      state.image_url = action.payload.image_url;
      state.likes = action.payload.likes;
      state.dislikes = action.payload.dislikes;
      state.reviews = action.payload.reviews;
      state.ratings = action.payload.ratings;
      state.isLogin = true;
    },
    logout(state) {
      state.username = "";
      state.image_url = "";
      state.likes = [];
      state.dislikes = [];
      state.reviews = [];
      state.ratings = [];
      state.isLogin = false;
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice;
