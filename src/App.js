import logo from './logo.svg';
import NavBar from './components/navbar/NavBar';
import './App.css';
import Login from './components/pages/Login';
import { Route, Routes } from 'react-router-dom';
import Quetions from './components/pages/Quetions';
import Exam from './components/pages/Exam';
import Result from './components/pages/Result';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/question' element={<Quetions />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
