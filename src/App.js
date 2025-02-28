import './App.css';
import UserList from './components/UserList';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UserCreate from './components/UserCreate'
import UserDelete from './components/UserDelete'
import UserFindById from './components/UserFindById'
import UserFindByName from './components/UserFindByName'
import UserFindGteAge from './components/UserFindGteAge'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BookDelete from './components/BookDelete';
import BookFindByTitle from './components/BookFindByTitle';
import BookFindByAuthor from './components/BookFindByAuthor';
import BookFindByPublisher from './components/BookFindByPublisher';

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
