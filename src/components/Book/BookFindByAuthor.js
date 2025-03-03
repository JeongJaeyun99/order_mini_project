import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookFindByAuthorSlice } from '../../slice/bookSlice';
import {Link} from "react-router-dom";
import "./BookListModal.css"
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const BookFindByTitle = ({onClose}) => {
    const dispatch = useDispatch();
    const [bookData,setBookData] = useState(null);
    const [bookAuthor,setBookAuthor] = useState("");
    const {bookFindByAuthor,loading,error} = useSelector((state) => state.bookFindByAuthor);
    const [rowData, setRowData] = useState([]);

    const handleChange =(e)=>{
        setBookAuthor(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(bookFindByAuthorSlice(bookAuthor));
    }

    useEffect(() =>{
        if(bookFindByAuthor){
            setBookData(bookFindByAuthor);
            if (bookFindByAuthor !== rowData) {
                setRowData(bookFindByAuthor || []);
            }
        }
    }, [bookFindByAuthor])

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
            <h3 className="modal-title">작가로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label className="modal-label">
                        Title : 
                    <input
                        type="text"
                        value={bookAuthor} // input값이 value 값에 들어감
                        name="author"
                        onChange={handleChange}
                        placeholder="작가를 입력하세요" 
                        required
                        className="modal-input"
                    />
                    </label>
                    <div className="modal-footer">
                        <button type="submit" className="modal-btn">제출</button>
                        <button type="button" onClick={onClose} className="modal-btn">닫기</button>
                    </div>
                </form>
                {bookData ? (
                    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                            pagination={true}
                            paginationPageSize={10}
                            paginationPageSizeSelector={[10, 20, 50, 100]}
                            domLayout="autoHeight"
                            rowHeight={40}
                            headerHeight={50}
                            modules={[
                                ClientSideRowModelModule, 
                                PaginationModule, 
                                ValidationModule // 🔥 오류 메시지 확인용
                            ]}
                            theme="legacy"
                        />
                    </div>
            ) : (
                <div>정보가 표시될 자리</div>
            )} 
        </>
    )
}

export default BookFindByTitle