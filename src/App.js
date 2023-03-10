import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector} from 'react-redux'
import Login from './Login';
import { auth } from './firebase';
import Widget from './Widget';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    });
  }, [])
  

  return (
    <div className="app">
      <Header/>

      {!user ? (<Login/>) : (

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>

      )}
    </div>
  );
}

export default App;
