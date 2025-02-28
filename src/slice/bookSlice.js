import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
    baseURL : "http://127.0.0.1:8000",
    headers : {
        "Content-Type" : "application/json",
    },
})

// 책 정보 전체 조회
export const bookSlice = createAsyncThunk("books/bookSlice", async () => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/book/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });

// 책 새로 생성
export const bookCreateSlice = createAsyncThunk("books/bookCreateSlice", async (body) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.post(`/book/create/`,body);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
});

// 책 삭제
export const bookDeleteSlice = createAsyncThunk("books/bookDeleteSlice", async (id) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.delete(`/book/delete/${id}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
});
// 책 제목으로 책 정보 불러오기
export const bookFindByTitleSlice = createAsyncThunk("books/bookFindByTitleSlice", async (title) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/book/title/${title}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });
// 작가이름 으로 책 정보 불러오기
  export const bookFindByAuthorSlice = createAsyncThunk("books/bookFindByAuthorSlice", async (author) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/book/author/${author}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });

// 출판사이름 으로 책 정보 불러오기
export const bookFindByPublisherSlice = createAsyncThunk("books/bookFindByPublisherSlice", async (publisher) => { // 바꾸는곳 async (변수 쓰려면) => 
  const response = await api.get(`/book/publisher/${publisher}/`);// 바꾸는곳
  console.log("response.data", response.data);
  return response.data;
});