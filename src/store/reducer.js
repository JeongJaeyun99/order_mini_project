// Redux Store Configuration (reducer.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "../services/userService"
import userDelete from "../services/userDeleteService"
import userFindById from "../services/userFindByIdService"
import userFindByName from "../services/userFindByNameService"
import userFindGteAge from "../services/userFindGteAgeService"
import bookList from "../services/bookService"
import bookDelete from "../services/bookDeleteService"
import bookFindByTitle from "../services/bookFindByTitleService"
import bookFindByAuthor from "../services/bookFindByAuthorService"
import bookFindByPublisher from "../services/bookFindByPublisherService"
import orderList from "../services/orderService"
import orderDelete from "../services/orderDeleteService"

const reducer = configureStore({
  reducer: {
    userList,
    userDelete,
    userFindById,
    userFindByName,
    userFindGteAge,
    bookList,
    bookDelete,
    bookFindByTitle,
    bookFindByAuthor,
    bookFindByPublisher,
    orderList,
    orderDelete
     // 유저 전체 받아오기
  },
});

export default reducer;
