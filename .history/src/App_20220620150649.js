import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login-signup-component/Login.js';
import Signup from './components/Login-signup-component/Signup.js';
import ChatRoom from './components/ChatRoom/';
import AuthProvider from './Context/AuthProvider.js';
import AppProvider from './Context/AppProvider.js';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        {/* <Route path="/signup" element={<Signup />} /> */}
                        <Route path="/" element={<ChatRoom />} />
                    </Routes>
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
