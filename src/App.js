import './App.css';
import UserList from './components/UserList';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UserCreate from './components/UserCreate'
import UserDelete from './components/UserDelete'


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/userList">User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/userCreate" element={<UserCreate />} />
        <Route path="/userDelete" element={<UserDelete />} />        
      </Routes>
    </Router>
  );
}

export default App;
