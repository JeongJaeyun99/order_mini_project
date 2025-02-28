import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../slice/userSlice';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const UserList = () => {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState([]);
    const {users,loading,error} = useSelector((state) => state.userList);

    useEffect(() => {
        dispatch(userSlice()); // 데이터를 불러오는 액션 실행 / dispatch가 변경될때 마다 이 useEffect 구문을 실행
    }, [dispatch]); // api를 불러오는곳

    useEffect(() => {
        // console.log(users) api로부터 데이터를 잘 받아오는지
        setUserData(users); // users가 변경될 때마다 userData 업데이트 / users가 변경될때 마다 이 useEffect 구문을 실행
    }, [users]); // users 데이터가 업데이트 되면 실행

    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <table>
            {userData?.map((user)=>
                (
                    <tr>
                        <td>
                            ID : {user.id}
                        </td>
                        <td>
                            Name : {user.name}
                        </td>
                        <td>
                            Email : {user.email}
                        </td>
                        <td>
                            Age : {user.age}
                        </td>
                    </tr>
                )
            )}
            <button><Link to='/userCreate'>회원가입하러 가기</Link></button>
            <button><Link to='/userDelete'>회원탈퇴하러 가기</Link></button>
        </table>
    )
}

export default UserList
