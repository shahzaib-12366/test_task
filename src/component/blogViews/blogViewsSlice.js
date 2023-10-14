import { createSlice } from "@reduxjs/toolkit";

const blogViewsSlice = createSlice({
  name: "blogViews",
  initialState: {},
  reducers: {
    incrementBlogViews: (state, action) => {
      const blogId = action.payload; // Use action.payload directly
      if (state[blogId]) {
        state[blogId]++;
      } else {
        state[blogId] = 1;
      }
    },
  },
});

export const { incrementBlogViews } = blogViewsSlice.actions;

export const selectBlogViews = (state) => state.blogViews;

export default blogViewsSlice.reducer;
