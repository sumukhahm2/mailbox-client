
import './App.css';
import { Route,Routes,Navigate} from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import LogIn from './Authentication/Login';
import Welcome from './Welcome';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const login=useSelector((state)=>state.auth.isAuthenticated)
  console.log(login)
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <Routes>
          {!login && <Route path='/signup' element={<SignUp/>}/>}
          {!login && <Route path='/login' element={<LogIn/>}/>}
          {login && <Route path='/welcome' element={<Welcome/>}/>}
          {login && <Route path='/login' element={<Navigate to='/welcome'/>}/>}
          <Route path='*' element={<Navigate to='/login'/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
