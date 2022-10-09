import './App.css';
import Home from './Home';
import LoginPage from './login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './SIghUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/signup" element = {<SignupPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
