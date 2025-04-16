import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Findpw = () => {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFindPw = async () => {
    try {
      const response = await axios.post("http://localhost:8000/member/find/password/", {
        member_id: memberId,
        name,
        phone,
      });

      // 성공하면 재설정 페이지로 memberId 넘겨서 이동
      if (response.status === 200) {
        navigate("/resetpw", { state: { memberId } });
      }
    } catch (error) {
      if (error.response?.data?.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg("비밀번호 찾기에 실패했습니다.");
      }
    }
  };

  return (
    <div style={{
      width: 1440,
      height: 1024,
      position: "relative",
      overflow: "hidden",
      background: "#fff"
    }}>
      <p style={{
        position: "absolute",
        left: 520,
        top: 74,
        fontSize: 64,
        fontWeight: 700,
        textAlign: "left",
        color: "#000"
      }}>비밀번호 찾기</p>

      {/* 입력창들 */}
      <input type="text" placeholder="아이디" value={memberId} onChange={(e) => setMemberId(e.target.value)} style={{ position: "absolute", left: 472.5, top: 245, width: 494, height: 70, background: "#eee", border: "1px solid #000", fontSize: 25, paddingLeft: 20, boxSizing: "border-box" }} />
      <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} style={{ position: "absolute", left: 472.5, top: 330, width: 494, height: 70, background: "#eee", border: "1px solid #000", fontSize: 25, paddingLeft: 20, boxSizing: "border-box" }} />
      <input type="text" placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ position: "absolute", left: 472.5, top: 416, width: 494, height: 70, background: "#eee", border: "1px solid #000", fontSize: 25, paddingLeft: 20, boxSizing: "border-box" }} />

      {/* 찾기 버튼 */}
      <button onClick={handleFindPw} style={{
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
        cursor: "pointer"
      }}>비밀번호 찾기</button>

      {errorMsg && (
        <p style={{
          position: "absolute",
          left: 470,
          top: 580,
          fontSize: 20,
          fontWeight: 600,
          color: "#f00"
        }}>{errorMsg}</p>
      )}
    </div>
  );
};

export default Findpw;
