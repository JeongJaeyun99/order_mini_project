import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFindByIdSlice } from '../slice/userSlice';
import {Link} from "react-router-dom";

const UserFindById = () => {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState(null);
    const [userId,setUserId] = useState("");
    const {userFindById,loading,error} = useSelector((state) => state.userFindById);

    const handleChange =(e)=>{
        setUserId(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(userFindByIdSlice(userId));
    }

    useEffect(() =>{
        if(userFindById){
            setUserData(userFindById);
        }
    }, [userFindById])
    // useEffect(() => {
    //         console.log(users) //api로부터 데이터를 잘 받아오는지
    //         setUserData(users); // users가 변경될 때마다 userData 업데이트 / users가 변경될때 마다 이 useEffect 구문을 실행
    //     }, [users]); // users 데이터가 업데이트 되면 실행

    // useEffect(() => {
    //     dispatch(userFindByIdSlice(id)); // 데이터를 불러오는 액션 실행 / dispatch가 변경될때 마다 이 useEffect 구문을 실행
    // }, [dispatch]); // api를 불러오는곳

    
    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>  
            <h3>회원 id로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label>
                        ID : 
                    <input
                        type="number"
                        value={userId} // input값이 value 값에 들어감
                        name="id"
                        onChange={handleChange}
                        placeholder="ID를 입력하세요" 
                        required
                    />
                    </label>
                    <button type="submit">찾기</button>
                </form>
                {userData?
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
                                <tr key={userData.id}>
                                    <td>{userData.id}</td>
                                    <td>{userData.name}</td>
                                    <td>{userData.email}</td>
                                    <td>{userData.age}</td>
                                </tr>
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

export default UserFindById