import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../../slice/userSlice';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styled from 'styled-components';
import './UserList.css';

const UserList = () => {
    const dispatch = useDispatch();
    // const [userData,setUserData] = useState([]);
    const [rowData, setRowData] = useState([]);
    const {users,loading,error} = useSelector((state) => state.userList);

    useEffect(() => {
        dispatch(userSlice()); // 데이터를 불러오는 액션 실행 / dispatch가 변경될때 마다 이 useEffect 구문을 실행
    }, [dispatch]); // api를 불러오는곳

    useEffect(() => {
        // console.log(users) api로부터 데이터를 잘 받아오는지
        setRowData(users || []); // users가 변경될 때마다 userData 업데이트 / users가 변경될때 마다 이 useEffect 구문을 실행
    }, [users]); // users 데이터가 업데이트 되면 실행


    const columnDefs = [
        {headerName : "ID", field : "id", flex : 1},
        {headerName : "Name", field : "name", flex : 1},
        {headerName : "Email", field : "email", flex : 1},
        {headerName : "Age", field : "age", flex : 1},
    ];

    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>
        <h3> User List </h3>
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}  // 페이지네이션 추가
                    paginationPageSize={10} // 한 페이지당 10개 표시
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
            <div className='button-wrapper'>
            <button className="styled-button"><Link to='/userCreate'>회원가입하러 가기</Link></button>
            <button className="styled-button"><Link to='/userDelete'>회원탈퇴하러 가기</Link></button>
            <button className="styled-button"><Link to='/userFindById'>회원id로 회원정보 찾으러 가기</Link></button>
            <button className="styled-button"><Link to='/userFindByName'>회원이름으로 회원정보 찾으러 가기</Link></button>
            <button className="styled-button"><Link to='/userFindGteAge'>특정 나이 이상의 회원 정보 찾으러 가기</Link></button>
            </div>
        </>
    )
}

export default UserList
