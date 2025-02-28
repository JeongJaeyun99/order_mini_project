import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFindByNameSlice } from '../../slice/userSlice';
import {Link} from "react-router-dom";

const UserFindByName = () => {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState(null);
    const [userName,setUserName] = useState("");
    const {userFindByName,loading,error} = useSelector((state) => state.userFindByName);

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
        }
    }, [userFindByName])

    
    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>  
            <h3>회원 이름으로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Name : 
                    <input
                        type="text"
                        value={userName} // input값이 value 값에 들어감
                        name="name"
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