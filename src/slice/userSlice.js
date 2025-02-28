import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
    baseURL : "http://127.0.0.1:8000",
    headers : {
        "Content-Type" : "application/json",
    },
})

// 유저 전체 조회
export const userSlice = createAsyncThunk("users/userSlice", async () => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/user/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });

  // 유저 생성
  export const userCreateSlice = createAsyncThunk("users/userCreateSlice", async (body) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.post(`/user/create/`,body);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });
  // 유저 삭제
  export const userDeleteSlice = createAsyncThunk("users/userDeleteSlice", async (id) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.delete(`/user/delete/${id}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });
  // 유저의 id로 검색
  export const userFindByIdSlice = createAsyncThunk("users/userFindByIdSlice", async (id) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/user/${id}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });
  // 유저의 이름으로 검색
  export const userFindByNameSlice = createAsyncThunk("users/userFindByNameSlice", async (name) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/user/name/${name}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });
  // 특정 나이 이상일때 나온는 정보 검색
  export const userFindGteAgeSlice = createAsyncThunk("users/userFindGteAgeSlice", async (age) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/user/age_gte/${age}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });