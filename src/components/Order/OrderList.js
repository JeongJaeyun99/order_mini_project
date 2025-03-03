import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderSlice } from '../../slice/orderSlice';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule, 
    PaginationModule, 
    ValidationModule  } from "ag-grid-community";
import {Modal} from 'antd'; // 모달 컴포넌트
import OrderDelete from './OrderDelete'

const OrderList = () => {
    const dispatch = useDispatch();
    const [rowData, setRowData] = useState([]);
    const {orders,loading,error} = useSelector((state) => state.orderList);

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
        dispatch(orderSlice()); // 데이터를 불러오는 액션 실행 / dispatch가 변경될때 마다 이 useEffect 구문을 실행
    }, [dispatch]); // api를 불러오는곳

    useEffect(() => {
        // console.log(users) api로부터 데이터를 잘 받아오는지
        setRowData(orders || []); // users가 변경될 때마다 userData 업데이트 / users가 변경될때 마다 이 useEffect 구문을 실행
    }, [orders]); // users 데이터가 업데이트 되면 실행

    const columnDefs = [
        {headerName : "ID", field : "id", flex : 1},
        {headerName : "User_id", field : "user_id", flex : 1},
        {headerName : "Book_id", field : "book_id", flex : 1},
        {headerName : "Address", field : "address", flex : 1},
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
            <h3> 주문 정보 </h3>
            {/* <button className="styled-button" onClick={()=> openModal("bookCreate")}>책 정보 등록하러 가기</button>
            <Modal
                title=""
                visible={modalState.bookCreate}
                onCancel={() => closeModal("bookCreate")}
                footer={null}
                width={600}
            >
                <BookCreate onClose={() => closeModal("bookCreate")}/>
            </Modal> */}
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
                <button className="styled-button" onClick={()=> openModal("orderDelete")}>책 정보 삭제하러 가기</button>
                <Modal
                    title=""
                    visible={modalState.orderDelete}
                    onCancel={() => closeModal("orderDelete")}
                    footer={null}
                    width={600}
                >
                    <OrderDelete onClose={() => closeModal("orderDelete")}/>
                </Modal>
            </div>
        </>
    )
}











export default OrderList