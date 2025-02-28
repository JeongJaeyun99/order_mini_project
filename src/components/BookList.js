import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookSlice } from '../slice/bookSlice';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";

const BookList = () => {
    const dispatch = useDispatch();
    //const [bookData,setBookData] = useState([]);
    const [rowData, setRowData] = useState([]);
    const {books,loading,error} = useSelector((state) => state.bookList);

    useEffect(() => {
        dispatch(bookSlice()); // 데이터를 불러오는 액션 실행 / dispatch가 변경될때 마다 이 useEffect 구문을 실행
    }, [dispatch]); // api를 불러오는곳

    useEffect(() => {
        // console.log(users) api로부터 데이터를 잘 받아오는지
        setRowData(books || []); // users가 변경될 때마다 userData 업데이트 / users가 변경될때 마다 이 useEffect 구문을 실행
    }, [books]); // users 데이터가 업데이트 되면 실행
    
    const columnDefs = [
        {headerName : "ID", field : "id", flex : 1},
        {headerName : "Title", field : "title", flex : 1},
        {headerName : "Author", field : "author", flex : 1},
        {headerName : "Publisher", field : "publisher", flex : 1},
        {headerName : "Price", field : "price", flex : 1},
    ];

    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>
        <h3> Book List </h3>
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}  // 페이지네이션 추가
                    paginationPageSize={10} // 한 페이지당 10개 표시
                    domLayout="autoHeight" // 높이 자동 조정
                    modules={[
                        ClientSideRowModelModule, 
                        PaginationModule, 
                        ValidationModule // 🔥 오류 메시지 확인용
                    ]}
                />
            </div>
            <button><Link to='/bookCreate'>책 정보 등록하러 가기</Link></button>
            <button><Link to='/bookDelete'>책 정보 삭제하러 가기</Link></button>
            <button><Link to='/bookFindByTitle'>책 제목으로 책 정보 찾으러 가기</Link></button>
            <button><Link to='/bookFindByAuthor'>작가로 책 정보 찾으러 가기</Link></button>
            <button><Link to='/bookFindByPublisher'>출판사로 회원 정보 찾으러 가기</Link></button>
        </>
    )
}

export default BookList