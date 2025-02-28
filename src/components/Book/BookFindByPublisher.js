import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookFindByPublisherSlice } from '../../slice/bookSlice';
import {Link} from "react-router-dom";

const BookFindByPublisher = () => {
    const dispatch = useDispatch();
    const [bookData,setBookData] = useState(null);
    const [bookPublisher,setBookPublisher] = useState("");
    const {bookFindByPublisher,loading,error} = useSelector((state) => state.bookFindByPublisher);

    const handleChange =(e)=>{
        setBookPublisher(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(bookFindByPublisherSlice(bookPublisher));
    }

    useEffect(() =>{
        if(bookFindByPublisher){
            setBookData(bookFindByPublisher);
        }
    }, [bookFindByPublisher])

    
    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>  
            <h3>출판사로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Author : 
                    <input
                        type="text"
                        value={bookPublisher} // input값이 value 값에 들어감
                        name="publisher"
                        onChange={handleChange}
                        placeholder="이름을 입력하세요" 
                        required
                    />
                    </label>
                    <button type="submit">찾기</button>
                </form>
                {bookData ?
                
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookData.map((book)=>
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.price}</td>
                                </tr>
                            )}
                            
                        </tbody>
                    </table>
                )
             : (
                <div>정보가 표시될 자리</div>
             )}
                <button><Link to='/bookList'>뒤로 가기</Link></button>
        </>
    )
}

export default BookFindByPublisher