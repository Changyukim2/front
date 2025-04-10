// src/components/GNB.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mypage from "./Mypage"; // ✅ 마이페이지 컴포넌트 불러오기
import "../style.css";

function GNB() {
  const [user, setUser] = useState(null);
  const [showMypage, setShowMypage] = useState(false); // ✅ 팝업 상태
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/member/check-login/", {
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.logged_in) {
          setUser({ id: data.member_id, name: data.name });
        } else {
          setUser(null);
        }
      });
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:8000/member/logout/", {
      method: "POST",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(null);
          alert("로그아웃 되었습니다.");
          navigate("/login");
        }
      });
  };

  return (
    <>
      <div className="gnb">
        <div className="gnb-inner">
          <h1 className="logo"><a href="/">Home</a></h1>
          <ul className="gnb-menu">
            <li>
              <button onClick={() => setShowMypage(true)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                마이페이지
              </button>
            </li>
            <li><a href="/history">이력조회</a></li>
            <li><a href="/alert">알림확인</a></li>
            <li><a href="/detect">감지화면</a></li>
            {user ? (
              <>
                <li><b>{user.name}님</b></li>
                <li><button onClick={handleLogout}>로그아웃</button></li>
              </>
            ) : (
              <li><a href="/login">로그인</a></li>
            )}
          </ul>
        </div>
      </div>

      {/* ✅ 마이페이지 팝업 */}
      {showMypage && (
  <div className="popup-overlay">
    <div className="popup-content">
      <Mypage 
        onClose={() => setShowMypage(false)} 
        onLogout={handleLogout} 
      />
    </div>
  </div>
)}

    </>
  );
}

export default GNB;
