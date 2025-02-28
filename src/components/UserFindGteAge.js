import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFindGteAgeSlice } from '../slice/userSlice';
import {Link} from "react-router-dom";

const UserFindByName = () => {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState(null);
    const [userAge,setUserAge] = useState("");
    const {userFindGteAge,loading,error} = useSelector((state) => state.userFindGteAge);

    const handleChange =(e)=>{
        setUserAge(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(userFindGteAgeSlice(userAge));
    }

    useEffect(() =>{
        if(userFindGteAge){
            setUserData(userFindGteAge);
        }
    }, [userFindGteAge])

    
    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>  
            <h3>특정 나이 이상인 사람의 회원 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Age : 
                    <input
                        type="number"
                        value={userAge} // input값이 value 값에 들어감
                        name="age"
                        onChange={handleChange}
                        placeholder="이름을 입력하세요" 
                        required
                    />
                    </label>
                    <button type="submit">찾기</button>
                </form>
                {userData ?
                
                    (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((user)=>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                    )
                 : (
                    <div>정보가 표시될 자리</div>
                 )}
                <button><Link to='/userList'>뒤로 가기</Link></button>
        </>
    )
}

export default UserFindByName