import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Mypage = ({ onClose, onLogout }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/member/mypage/api/", {
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch(() => alert("사용자 정보를 불러오지 못했습니다."));
  }, []);

  return (
    <div
      style={{
        width: 859,
        height: 650,
        position: "relative",
        overflow: "hidden",
        borderRadius: 30,
        background: "#eee"
      }}
    >
      <p style={{ ...styleLine, top: 80 }}>이름 : {userData?.name || "..."}</p>
      <p style={{ ...styleLine, top: 150 }}>아이디 : {userData?.member_id || "..."}</p>
      <p style={{ ...styleLine, top: 220 }}>전화번호 : {userData?.phone || "..."}</p>
      <p style={{ ...styleLine, top: 290 }}>생년월일 : {userData?.birth_date || "..."}</p>
      <p style={{ ...styleLine, top: 360 }}>병동 : {userData?.ward_name || "..."}</p>

      {/* 로그아웃 버튼 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 663,
          position: "absolute",
          left: 78,
          top: 480,
          gap: 8,
          padding: 14,
          borderRadius: 8,
          background: "#000",
          cursor: "pointer"
        }}
        onClick={() => {
          onClose();
          onLogout();
        }}
      >
        <p style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>로그아웃</p>
      </div>

      <p style={{
        width: 330,
        height: 52,
        position: "absolute",
        left: 35,
        top: 10,
        fontSize: 24,
        textAlign: "left",
        color: "#000"
      }}>마이페이지</p>

      <img
        src="image-10.png"
        alt="닫기"
        onClick={onClose}
        style={{
          width: 20,
          height: 20,
          position: "absolute",
          left: 810,
          top: 29,
          objectFit: "cover",
          cursor: "pointer"
        }}
      />
    </div>
  );
};

const styleLine = {
  width: 436,
  height: 48,
  position: "absolute",
  left: 98,
  fontSize: 32,
  textAlign: "left",
  color: "#000"
};

export default Mypage;
