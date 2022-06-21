import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login-signup-component/Login.js';
import Signup from './components/Login-signup-component/Signup.js';
import ChatRoom from './components/ChatRoom/ChatRoom.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/signup" element={<Signup />} /> */}
                <Route path="/chatroom" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
