import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFindByNameSlice } from '../../slice/userSlice';
import {Link} from "react-router-dom";
import "./UserListModal.css"
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const UserFindByName = ({onClose}) => {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState(null);
    const [userName,setUserName] = useState("");
    const {userFindByName,loading,error} = useSelector((state) => state.userFindByName);
    const [rowData, setRowData] = useState([]);

    const handleChange =(e)=>{
        setUserName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(userFindByNameSlice(userName));
    }

    useEffect(() =>{
        if(userFindByName){
            setUserData(userFindByName);
            if (userFindByName !== rowData) {
                setRowData(userFindByName || []);
            }
        }
    }, [userFindByName])

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
            <h3 className="modal-title">회원 이름으로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label className="modal-label">
                        Name : 
                    <input
                        type="text"
                        value={userName} // input값이 value 값에 들어감
                        name="name"
                        onChange={handleChange}
                        placeholder="이름을 입력하세요" 
                        required
                        className="modal-input"
                    />
                    </label>
                    <div className="modal-footer">
                        <button type="submit" className="modal-btn">제출</button>
                        <button type="button" onClick={onClose} className="modal-btn">닫기</button>
                    </div>
                </form>
                {userData ? (
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

export default UserFindByName