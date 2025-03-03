import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { userDeleteSlice } from '../../slice/userSlice';
import {Button, Modal,message} from "antd"
import { useNavigate } from "react-router-dom";
import "./UserListModal.css"

function UserDelete({onClose}) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    //const {userDelete,loading,error} = useSelector((state)=>state.userDelete)
    const [id,setId] = useState("")
    const handleChange =(e)=>{
        setId(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        Modal.confirm({
          title: "정말 삭제하시겠습니까?",
          content : `ID ${id}을(를) 삭제합니다.`,
          okText : "삭제",
          calcelText : "취소",
          okType : "danger",
          onOk : () =>{
            return new Promise((resolve)=>{
              setTimeout(()=>{
                dispatch(userDeleteSlice(id))
                message.success("삭제가 완료되었습니다.");
                navigate("/userList/")
                resolve();
              },1000)
            })
          }
        })
    }

  return (
    <div>
      <h3 className="modal-title">회원 탈퇴 하기</h3>
            <form onSubmit={handleSubmit}> 
            <label className="modal-label">
                ID : 
            <input
                type="number"
                value={id} // input값이 value 값에 들어감
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
    </div>
  )
}

export default UserDelete
