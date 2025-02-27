// Redux Store Configuration (reducer.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "../services/userService"

const reducer = configureStore({
  reducer: {
    userList // 유저 전체 받아오기
  },
});

export default reducer;
