import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Findid from "./components/Findid";
import Findpw from "./components/Findpw";
import Resetpw from "./components/Resetpw";
import Mypage from "./components/Mypage";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/findid" element={<Findid />} />
      <Route path="/findpw" element={<Findpw />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpw" element={<Resetpw />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  </Router>
  );
}

export default App;