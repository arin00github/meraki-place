import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmark";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const bookmarkConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    bookmark: persistReducer(bookmarkConfig, bookmarkReducer),
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
