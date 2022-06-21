import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login.js';
import ChatRoom from './components/ChatRoom/';
import AuthProvider from './Context/AuthProvider.js';
import AppProvider from './Context/AppProvider.js';
import AddRoomModal from './components/Modals/AddRoomModal.js';
import InviteMemberModal from './components/Modals/InviteMemberModal.js';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<ChatRoom />} />
                    </Routes>
                    <AddRoomModal />
                    <InviteMemberModal />
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
