import { createSlice } from "@reduxjs/toolkit";
import { ArticleDocs } from "../services/interface/article.interface";

interface BookmarkState {
  articles: ArticleDocs[];
}

const initialState: BookmarkState = {
  articles: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.articles.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.articles = state.articles.filter(
        (bookmark) => bookmark._id !== action.payload,
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export const selectBookmarks = (state: { bookmark: BookmarkState }) =>
  state.bookmark;

export default bookmarkSlice.reducer;
