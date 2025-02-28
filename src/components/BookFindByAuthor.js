import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookFindByAuthorSlice } from '../slice/bookSlice';
import {Link} from "react-router-dom";

const BookFindByTitle = () => {
    const dispatch = useDispatch();
    const [bookData,setBookData] = useState(null);
    const [bookAuthor,setBookAuthor] = useState("");
    const {bookFindByAuthor,loading,error} = useSelector((state) => state.bookFindByAuthor);

    const handleChange =(e)=>{
        setBookAuthor(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(bookFindByAuthorSlice(bookAuthor));
    }

    useEffect(() =>{
        if(bookFindByAuthor){
            setBookData(bookFindByAuthor);
        }
    }, [bookFindByAuthor])

    
    if(loading){ 
        return <div>loading...</div>
    }
    if(error){
        return <div>error...</div>
    }

    return (
        <>  
            <h3>작가로 정보 찾기</h3>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Title : 
                    <input
                        type="text"
                        value={bookAuthor} // input값이 value 값에 들어감
                        name="author"
                        onChange={handleChange}
                        placeholder="작가를 입력하세요" 
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

export default BookFindByTitle