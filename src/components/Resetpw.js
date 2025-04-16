import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Resetpw = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const memberId = location.state?.memberId;

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/member/reset/password/", {
        member_id: memberId,
        new_password: password
      });
      alert("비밀번호가 재설정되었습니다.");
      navigate("/login");
    } catch (error) {
      alert("비밀번호 재설정 실패");
    }
  };

  return (
    <div style={{ width: 1440, height: 1024, position: "relative", overflow: "hidden", background: "#fff" }}>
      <p style={{ position: "absolute", left: 486, top: 90, fontSize: 48, fontWeight: 700, textAlign: "left", color: "#000" }}>
        비밀번호 재설정
      </p>

      <input type={showPassword ? "text" : "password"} placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
        style={{ position: "absolute", left: 470, top: 270, width: 494, height: 70, background: "#eee", border: "1px solid #000", fontSize: 25, paddingLeft: 20 }}
      />
      <input type={showPassword ? "text" : "password"} placeholder="비밀번호 재확인"
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ position: "absolute", left: 470, top: 360, width: 494, height: 70, background: "#eee", border: "1px solid #000", fontSize: 25, paddingLeft: 20 }}
      />

      <img src="image-7.png" alt="비밀번호 보기" onClick={() => setShowPassword(!showPassword)}
        style={{ width: 30, height: 30, position: "absolute", left: 922, top: 290, objectFit: "cover", cursor: "pointer" }} />
      <img src="image-7.png" alt="비밀번호 보기" onClick={() => setShowPassword(!showPassword)}
        style={{ width: 30, height: 30, position: "absolute", left: 922, top: 380, objectFit: "cover", cursor: "pointer" }} />

      <button onClick={handleResetPassword} style={{
        position: "absolute", left: 468, top: 460, width: 494, height: 65,
        borderRadius: 10, background: "#000", color: "#fff", fontSize: 24, fontWeight: 600, border: "none", cursor: "pointer"
      }}>
        비밀번호 재설정
      </button>
    </div>
  );
};

export default Resetpw;
