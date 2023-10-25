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
import NavBar from './NavBar/NavBar';
import NavBar2 from './NavBar/NavBar2';
function App() {
  const dispatch=useDispatch()
  const login=useSelector((state)=>state.auth.isAuthenticated)
  useEffect(()=>{
    if(localStorage.getItem('email') && localStorage.getItem('token'))
     dispatch(authActions.setToken({idToken:localStorage.getItem('token'),email:localStorage.getItem('email')}))
     dispatch(authActions.login())
  },[dispatch])
 
    useEffect(()=>{
        if(localStorage.getItem('email') && localStorage.getItem('token'))
        dispatch(fetchSentData())
      
      },[dispatch])
      
  setInterval(()=>{
    if(localStorage.getItem('email') && localStorage.getItem('token'))
    dispatch(fetchSentData())
  },2000)
  
 
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       {login && <NavBar2/>}
      </header>
      <main className='main'>
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
