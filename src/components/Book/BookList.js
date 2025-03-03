import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookSlice } from '../../slice/bookSlice';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";
import {Modal} from 'antd'; // 모달 컴포넌트
import BookCreate from './BookCreate'
import BookDelete from './BookDelete'
import BookFindByTitle from './BookFindByTitle'
import BookFindByAuthor from './BookFindByAuthor'
import BookFindByPublisher from './BookFindByPublisher'

const BookList = () => {
    const dispatch = useDispatch();
    //const [bookData,setBookData] = useState([]);
    const [rowData, setRowData] = useState([]);
    const {books,loading,error} = useSelector((state) => state.bookList);

    const [modalState, setModalState] = useState({
        bookCreate: false,
        bookDelete: false,
        bookFindById: false,
        bookFindByName: false,
        bookFindGteAge: false
    });

    const openModal = (modalName) => {
        // console.log("모달 열기:", type); 
        setModalState(prev => ({ ...prev, [modalName]: true }));
    }

    const closeModal = (modalName) => {
        setModalState(prev => ({ ...prev, [modalName]: false }));
    }

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
        <h3> 책 정보 </h3>
            <button className="styled-button" onClick={()=> openModal("bookCreate")}>책 정보 등록하러 가기</button>
            <Modal
                title=""
                visible={modalState.bookCreate}
                onCancel={() => closeModal("bookCreate")}
                footer={null}
                width={600}
            >
                <BookCreate onClose={() => closeModal("bookCreate")}/>
            </Modal>
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%", marginTop: '20px' }}>
                <AgGridReact
                    theme="legacy"
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}  // 페이지네이션 추가
                    paginationPageSize={8} // 한 페이지당 10개 표시
                    paginationPageSizeSelector={[10, 20, 50, 100]}
                    domLayout="autoHeight"
                    rowHeight={40}
                    headerHeight={50} // 높이 자동 조정
                    modules={[
                        ClientSideRowModelModule, 
                        PaginationModule, 
                        ValidationModule // 🔥 오류 메시지 확인용
                    ]}
                />
            </div>
            <div className='button-wrapper' style={ {marginTop: '60px'}}>
                <button className="styled-button" onClick={()=> openModal("bookDelete")}>책 정보 삭제하러 가기</button>
                <Modal
                    title=""
                    visible={modalState.bookDelete}
                    onCancel={() => closeModal("bookDelete")}
                    footer={null}
                    width={600}
                >
                    <BookDelete onClose={() => closeModal("bookDelete")}/>
                </Modal>
                <button className="styled-button" onClick={()=> openModal("bookFindByTitle")}>책 제목으로 책 정보 찾으러 가기</button>
                <Modal
                    title=""
                    visible={modalState.bookFindByTitle}
                    onCancel={() => closeModal("bookFindByTitle")}
                    footer={null}
                    width={600}
                >
                    <BookFindByTitle onClose={() => closeModal("bookFindByTitle")}/>
                </Modal>
                <button className="styled-button" onClick={()=> openModal("bookFindByAuthor")}>작가로 책 정보 찾으러 가기</button>
                <Modal
                    title=""
                    visible={modalState.bookFindByAuthor}
                    onCancel={() => closeModal("bookFindByAuthor")}
                    footer={null}
                    width={600}
                >
                    <BookFindByAuthor onClose={() => closeModal("bookFindByAuthor")}/>
                </Modal>
                <button className="styled-button" onClick={()=> openModal("bookFindByPublisher")}>출판사로 회원 정보 찾으러 가기</button>
                <Modal
                    title=""
                    visible={modalState.bookFindByPublisher}
                    onCancel={() => closeModal("bookFindByPublisher")}
                    footer={null}
                    width={600}
                >
                    <BookFindByPublisher onClose={() => closeModal("bookFindByPublisher")}/>
                </Modal>
            </div>
        </>
    )
}

export default BookList