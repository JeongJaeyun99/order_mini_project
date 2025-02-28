import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {bookCreateSlice} from '../slice/bookSlice'

function BookCreate() {
    const dispatch = useDispatch();
    const [bookCreateData,setBookCreateData] = useState({
        title : "",
        author : "",
        publisher : "",
        price : ""
    });

    const handleChange= (e) =>{
        setBookCreateData({...bookCreateData,[e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(bookCreateSlice(bookCreateData));
    }

    
    return (
        <>
            <h3>책 정보 새로 등록 하기</h3>
            <form onSubmit={handleSubmit}> 
            <label>
            책 제목 : 
            <input
                type="text"
                value={bookCreateData.title} // input값이 value 값에 들어감
                name="title"
                onChange={handleChange}
                placeholder="책의 제목을 입력하세요" 
                required
            />
            </label>
            <label>
            작가 : 
            <input
                type="text"
                value={bookCreateData.author} // input값이 value 값에 들어감
                name="author"
                onChange={handleChange}
                placeholder="작가를 입력하세요" 
                required
            />
            </label>
            <label>
            출판사 : 
            <input
                type="text"
                value={bookCreateData.publisher} // input값이 value 값에 들어감
                name="publisher"
                onChange={handleChange} // 이름은 입력되면서 바뀔수도 있으므로 onChange가 들어가야함 
                placeholder="출판사를 입력하세요" 
                required
            />
            </label>
            <label>
            가격 : 
            <input
                type="number"
                value={bookCreateData.price} // input값이 value 값에 들어감
                name="price"
                onChange={handleChange} // 이름은 입력되면서 바뀔수도 있으므로 onChange가 들어가야함 
                placeholder="가격을 입력하세요" 
                required
            />
            </label>
                <button type="submit">제출</button>
            </form>
        </>
    )
}

export default BookCreate
