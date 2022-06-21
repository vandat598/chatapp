import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login-signup-component/Login';
import Signup from './components/Login-signup-component/Signup';
import Chatpage from './components/ChatRoom/Chatpage.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/chatpage" element={<Chatpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
