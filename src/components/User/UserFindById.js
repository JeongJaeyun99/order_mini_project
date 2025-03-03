import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFindByIdSlice } from '../../slice/userSlice';
import {Link} from "react-router-dom";
import "./UserListModal.css"
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const UserFindById = ({onClose}) => {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState(null);
    const [userId,setUserId] = useState("");
    const {userFindById,loading,error} = useSelector((state) => state.userFindById);
    const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가
    const [rowData, setRowData] = useState([]);

    const handleChange =(e)=>{
        setUserId(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(userFindByIdSlice(userId));
    }

    useEffect(() =>{
        if (userFindById) {
            setUserData(userFindById);
            setErrorMessage(""); // 데이터가 있으면 에러 메시지 초기화
            if (userFindById !== rowData) {
                setRowData(userFindById || []);
            }
        } else {
            setErrorMessage("아이디가 존재하지 않습니다.");
        }
    }, [userFindById])
    // useEffect(() => {
    //         console.log(users) //api로부터 데이터를 잘 받아오는지
    //         setUserData(users); // users가 변경될 때마다 userData 업데이트 / users가 변경될때 마다 이 useEffect 구문을 실행
    //     }, [users]); // users 데이터가 업데이트 되면 실행

    // useEffect(() => {
    //     dispatch(userFindByIdSlice(id)); // 데이터를 불러오는 액션 실행 / dispatch가 변경될때 마다 이 useEffect 구문을 실행
    // }, [dispatch]); // api를 불러오는곳

    const columnDefs = [
        {headerName : "ID", field : "id", flex : 1},
        {headerName : "Name", field : "name", flex : 1},
        {headerName : "Email", field : "email", flex : 1},
        {headerName : "Age", field : "age", flex : 1},
    ];
    

    if(loading){ 
        return <div>loading...</div>
    }

    return (
        <>  
            <h3 className="modal-title">회원 id로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label className="modal-label">
                        ID : 
                    <input
                        type="number"
                        value={userId} // input값이 value 값에 들어감
                        name="id"
                        onChange={handleChange}
                        placeholder="ID를 입력하세요" 
                        required
                        className="modal-input"
                    />
                    </label>
                    <div className="modal-footer">
                        <button type="submit" className="modal-btn">제출</button>
                        <button type="button" onClick={onClose} className="modal-btn">닫기</button>
                    </div>
                </form>
                {error && <div style={{ color: "red" }}>회원정보를 찾을수 없습니다.</div>}
                {userFindById ? (
                <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={[userData]}
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

export default UserFindById