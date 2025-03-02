import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {userCreateSlice} from '../../slice/userSlice'
import { useNavigate } from 'react-router-dom';
import "./UserListModal.css"

function UserCreate({onClose}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userCreateData,setUserCreateData] = useState({
        name : "",
        email : "",
        age : ""
    });

    const handleChange= (e) =>{
        setUserCreateData({...userCreateData,[e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(userCreateSlice(userCreateData));
        navigate("/userList/");
        onClose();
    }

    
    return (
            <form onSubmit={handleSubmit}>
                <h3 className="modal-title">회원 가입 하기</h3> 
                <label className="modal-label">
                    이름 : 
                <input
                    type="text"
                    value={userCreateData.name} // input값이 value 값에 들어감
                    name="name"
                    onChange={handleChange}
                    placeholder="이름을 입력하세요" 
                    required
                    className="modal-input"
                />
                </label>
                <label className="modal-label">
                이메일 : 
                <input
                    type="email"
                    value={userCreateData.email} // input값이 value 값에 들어감
                    name="email"
                    onChange={handleChange}
                    placeholder="이메일을 입력하세요" 
                    required
                    className="modal-input"
                />
                </label>
                <label className="modal-label"> 
                나이 : 
                <input
                    type="number"
                    value={userCreateData.age} // input값이 value 값에 들어감
                    name="age"
                    onChange={handleChange} // 이름은 입력되면서 바뀔수도 있으므로 onChange가 들어가야함 
                    placeholder="나이을 입력하세요" 
                    required
                    className="modal-input"
                />
                </label>
                    <div className="modal-footer">
                        <button type="submit" className="modal-btn">제출</button>
                        <button type="button" onClick={onClose} className="modal-btn">닫기</button>
                    </div>
            </form>
    )
}

export default UserCreate
