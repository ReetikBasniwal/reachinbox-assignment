import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Onebox from "./pages/Onebox/Onebox";
import { useDispatch, useSelector } from "react-redux";
import AuthCallback from "./components/AuthRedirect/AuthRedirect";
import Sidebar from "./components/Sidebar/Sidebar";
import { handleAuthCallback } from "./redux/reducers/authSlice";

function App() {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user) return;
    try{
      const accessToken = localStorage.getItem('token')
      if(accessToken) dispatch(handleAuthCallback(accessToken))
    }catch (e) {
      console.log('not signed in');
    }
  },[dispatch, user])

  useEffect(() => {
    console.log(user, typeof user, "user in app");
  }, [user]);

  return (
    <Router>
      <div className="app">
        {user && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/onebox" element={<Onebox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
