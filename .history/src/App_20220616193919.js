import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login-signup-component/Login';
import Signup from './components/Login-signup-component/Signup';
import Mainpage from './components/Login-signup-component/Signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mainpage" element={<Mainpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
