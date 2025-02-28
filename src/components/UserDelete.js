import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { userDeleteSlice } from '../slice/userSlice';

function UserDelete() {
    const dispatch = useDispatch()
    //const {userDelete,loading,error} = useSelector((state)=>state.userDelete)
    const [id,SetId] = useState("")
    const handleChange =(e)=>{
        SetId(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); 
        dispatch(userDeleteSlice(id))
    }
  return (
    <div>
      <h3>회원 탈퇴 하기</h3>
            <form onSubmit={handleSubmit}> 
            <label>
                ID : 
            <input
                type="number"
                value={id} // input값이 value 값에 들어감
                name="id"
                onChange={handleChange}
                placeholder="ID를 입력하세요" 
                required
            />
            </label>
            <button type="submit">제출</button>
            </form>
    </div>
  )
}

export default UserDelete
