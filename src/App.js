import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Createpost from './components/Createpost';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/create' element={<Createpost/>}></Route>
      <Route path='/viewall' element={<View/>}></Route>
      
    </Routes>
        </BrowserRouter>

  );
}

export default App;
