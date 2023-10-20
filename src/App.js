import React,{useEffect} from 'react'
import './App.css';
import { Route,Routes,Navigate} from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import LogIn from './Authentication/Login';
import Welcome from './Welcome';
import { authActions } from './ReduxStore/AuthSlice';
import { useSelector,useDispatch } from 'react-redux';
import Compose from './Compose Mail/Compose';
import { fetchSentData } from './ReduxStore/FetchEmailData';
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
     dispatch(authActions.setToken(localStorage.getItem('token')))
     dispatch(authActions.login())
  },[])
  useEffect(()=>{
  dispatch(fetchSentData())
  },[dispatch])
  const login=useSelector((state)=>state.auth.isAuthenticated)
 
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <Routes>
          {!login && <Route path='/signup' element={<SignUp/>}/>}
          {!login && <Route path='/login' element={<LogIn/>}/>}
          {login && <Route path='/welcome' element={<Welcome/>}/>}
          {login && <Route path='/compose' element={<Compose/>}/>}
          {login && <Route path='/login' element={<Navigate to='/compose'/>}/>}
          <Route path='*' element={<Navigate to='/login'/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
