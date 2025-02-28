import './App.css';
import UserList from './components/UserList';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UserCreate from './components/UserCreate'
import UserDelete from './components/UserDelete'
import UserFindById from './components/UserFindById'
import UserFindByName from './components/UserFindByName'
import UserFindGteAge from './components/UserFindGteAge'


function App() {
  return (
      <>
        <nav>
          <Link to="/">Home</Link> | <Link to="/userList">User</Link> | <Link to="/bookList">Book</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/userCreate" element={<UserCreate />} />
          <Route path="/userDelete" element={<UserDelete />} />
          <Route path="/userFindById" element={<UserFindById />} />         
          <Route path="/userFindByName" element={<UserFindByName />} />
          <Route path="/userFindGteAge" element={<UserFindGteAge />} />
        </Routes>
      </>
  );
}

export default App;
