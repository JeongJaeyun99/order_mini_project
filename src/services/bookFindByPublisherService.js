import { createSlice } from '@reduxjs/toolkit';
import { bookFindByPublisherSlice } from '../slice/bookSlice' // 바꾸는곳

// 데이터를 변수에 넣는곳(변수설정)
const bookFindByPublisherService = createSlice({// 바꾸는곳
    name: "bookFindByPublisher",// 바꾸는곳
    initialState: {
        bookFindByPublisher: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(bookFindByPublisherSlice.pending, (state) => {// 바꾸는곳
          state.loading = true; // db또는 api에서 불러오는중을 알리기 위해 loading값이 true가 됨.
          state.error = null;
        })
        .addCase(bookFindByPublisherSlice.fulfilled, (state, action) => {// 바꾸는곳
          state.loading = false; // db 또는 api 에서 불러오는것이 성공했으므로 loading을 안해도 되니깐 false
          state.bookFindByPublisher = action.payload; // response.data이다. 
        })
        .addCase(bookFindByPublisherSlice.rejected, (state, action) => {// 바꾸는곳
          state.loading = false; // db 또는 api 에서 불러오는것을 실패했으므로 에러 메시지를 띄워야 해서 false
          state.error = action.error.message;
        });
    },
  });
  
  export default bookFindByPublisherService.reducer;// 바꾸는곳