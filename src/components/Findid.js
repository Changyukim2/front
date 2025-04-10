import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Findid = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [foundId, setFoundId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFindId = async () => {
    try {
      const response = await axios.post("http://localhost:8000/member/api/find-id/", {
        name,
        phone,
      });
      setFoundId(response.data.userId);
      setErrorMsg("");
      console.log("응답값:", response.data); // 이걸 handleFindId 내부에 추가해보세요

    } catch (error) {
      setFoundId("");
      setErrorMsg("아이디를 찾을 수 없습니다.");
    }
  };

  return (
    <>
      <div
        style={{
          width: 1440,
          height: 1024,
          position: "relative",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {/* 제목 */}
        <p
          style={{
            position: "absolute",
            left: 556,
            top: 74,
            fontSize: 64,
            fontWeight: 700,
            textAlign: "left",
            color: "#000",
          }}
        >
          아이디 찾기
        </p>

        {/* 이름 입력 */}
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        {/* 전화번호 입력 */}
        <input
          type="text"
          placeholder="전화번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            position: "absolute",
            left: 472.5,
            top: 335,
            width: 494,
            height: 70,
            background: "#eee",
            border: "1px solid #000",
            fontSize: 25,
            paddingLeft: 20,
            boxSizing: "border-box",
          }}
        />

        {/* 아이디 찾기 버튼 */}
        <button
          onClick={handleFindId}
          style={{
            width: 494,
            height: 65,
            position: "absolute",
            left: "472.5px",
            top: "430px",
            borderRadius: 10,
            background: "#000",
            fontSize: 24,
            fontWeight: 600,
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          아이디 찾기
        </button>

        {/* 결과 출력 */}
        {/* 아이디 결과 출력 */}
{/* 결과 출력 */}
{foundId && (
  <p
    style={{
      width: 600,
      height: 29,
      position: "absolute",
      left: 450,
      top: 480, // ← 살짝 위로 올려줘 보기 쉽게
      fontSize: 24,
      fontWeight: 600,
      textAlign: "center",
      color: "#000",
      zIndex: 10, // 다른 요소보다 위에 보이게
    }}
  >
    고객님의 아이디는 <strong>{foundId}</strong> 입니다
  </p>
)}


{/* 에러 메시지 출력 */}
{errorMsg && (
  <p
    style={{
      width: 600,
      height: 29,
      position: "absolute",
      left: 450,
      top: 540, // 👈 에러는 아래에
      fontSize: 20,
      fontWeight: 600,
      textAlign: "center",
      color: "#f70a0a",
    }}
  >
    {errorMsg}
  </p>
)}


        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate("/login")}
          style={{
            position: "absolute",
            top: 600,
            left: 472.5,
            width: 494,
            height: 50,
            backgroundColor: "#ddd",
            border: "1px solid #aaa",
            fontSize: 18,
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    </>
  );
};

export default Findid;
