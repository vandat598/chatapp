import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login-signup-component/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
