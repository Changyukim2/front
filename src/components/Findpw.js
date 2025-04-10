import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Findpw = () => {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [foundPw, setFoundPw] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFindPw = async () => {
    try {
      const response = await axios.post("http://localhost:8000/member/find/password/", {
        member_id: memberId,
        name,
        phone,
      });

      setFoundPw(response.data.passwd); // 받은 비밀번호 표시
      setErrorMsg("");
    } catch (error) {
      setFoundPw("");
      if (error.response?.data?.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg("비밀번호 찾기에 실패했습니다.");
      }
    }
  };

  return (
    <div
      style={{
        width: 1440,
        height: 1024,
        position: "relative",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <p
        style={{
          position: "absolute",
          left: 520,
          top: 74,
          fontSize: 64,
          fontWeight: 700,
          textAlign: "left",
          color: "#000",
        }}
      >
        비밀번호 찾기
      </p>

      {/* 아이디 */}
      <input
        type="text"
        placeholder="아이디"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={{
          position: "absolute",
          left: 472.5,
          top: 245,
          width: 494,
          height: 70,
          background: "#eee",
          border: "1px solid #000",
          fontSize: 25,
          paddingLeft: 20,
          boxSizing: "border-box",
        }}
      />

      {/* 이름 */}
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          position: "absolute",
          left: 472.5,
          top: 330,
          width: 494,
          height: 70,
          background: "#eee",
          border: "1px solid #000",
          fontSize: 25,
          paddingLeft: 20,
          boxSizing: "border-box",
        }}
      />

      {/* 전화번호 */}
      <input
        type="text"
        placeholder="전화번호"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          position: "absolute",
          left: 472.5,
          top: 416,
          width: 494,
          height: 70,
          background: "#eee",
          border: "1px solid #000",
          fontSize: 25,
          paddingLeft: 20,
          boxSizing: "border-box",
        }}
      />

      {/* 비밀번호 찾기 버튼 */}
      <button
        onClick={handleFindPw}
        style={{
          width: 494,
          height: 65,
          position: "absolute",
          left: "472.5px",
          top: "502px",
          borderRadius: 10,
          background: "#000",
          fontSize: 24,
          fontWeight: 600,
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        비밀번호 찾기
      </button>

      {/* 결과 출력 */}
      {foundPw && (
        <p
          style={{
            position: "absolute",
            left: 470,
            top: 580,
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0",
          }}
        >
          비밀번호: {foundPw}
        </p>
      )}
      {errorMsg && (
        <p
          style={{
            position: "absolute",
            left: 470,
            top: 580,
            fontSize: 20,
            fontWeight: 600,
            color: "#f00",
          }}
        >
          {errorMsg}
        </p>
      )}

      {/* 비밀번호 재설정 페이지 이동 */}
      <p
        onClick={() => navigate("/resetpw")}
        style={{
          position: "absolute",
          left: 618,
          top: 640,
          fontSize: 20,
          fontWeight: 500,
          color: "#000",
          cursor: "pointer",
        }}
      >
        비밀번호 재설정 페이지로 이동
      </p>
    </div>
  );
};

export default Findpw;
