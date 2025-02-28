import './App.css';
import UserList from './components/User/UserList';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UserCreate from './components/User/UserCreate'
import UserDelete from './components/User/UserDelete'
import UserFindById from './components/User/UserFindById'
import UserFindByName from './components/User/UserFindByName'
import UserFindGteAge from './components/User/UserFindGteAge'
import BookList from './components/Book/BookList';
import BookCreate from './components/Book/BookCreate';
import BookDelete from './components/Book/BookDelete';
import BookFindByTitle from './components/Book/BookFindByTitle';
import BookFindByAuthor from './components/Book/BookFindByAuthor';
import BookFindByPublisher from './components/Book/BookFindByPublisher';

function App() {
  return (
      <>
        <nav>
          <Link to="/">Home</Link> | <Link to="/userList">User</Link> | <Link to="/bookList">Book</Link>
        </nav>
        <Routes>
          {/* User */}
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/userCreate" element={<UserCreate />} />
          <Route path="/userDelete" element={<UserDelete />} />
          <Route path="/userFindById" element={<UserFindById />} />         
          <Route path="/userFindByName" element={<UserFindByName />} />
          <Route path="/userFindGteAge" element={<UserFindGteAge />} />
          {/* Book */}
          <Route path="/bookList" element={<BookList />} />
          <Route path="/bookCreate" element={<BookCreate />} />
          <Route path="/bookDelete" element={<BookDelete />} />
          <Route path="/bookFindByTitle" element={<BookFindByTitle />} />
          <Route path="/bookFindByAuthor" element={<BookFindByAuthor />} />
          <Route path="/bookFindByPublisher" element={<BookFindByPublisher />} />
        </Routes>
      </>
  );
}

export default App;
