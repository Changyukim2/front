import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
    year: "",
    month: "",
    day: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  {/* 가입 정보 서버로 전송 */}
  const handleSignup = async () => {
    if (formData.password !== formData.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    const birth = `${formData.year}-${formData.month}-${formData.day}`;
  
    try {
      const response = await fetch("http://localhost:8000/member/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          member_id: formData.id,
          passwd: formData.password,
          name: formData.name,
          ward_name: "응급병동", // UI에 없으니 일단 고정 (또는 선택 항목 추가 가능)
          phone: formData.phone,
          birth_date: birth
        })
      });
  
      const result = await response.json();
      if (response.ok && result.success) {
        alert("회원가입 성공!");
        navigate("/login");
      } else {
        alert("회원가입 실패: " + result.message);
      }
    } catch (err) {
      alert("서버 오류: " + err.message);
    }
  };


  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Preview</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      html, body {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        width: 100%;\n        height: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n    "
        }}
      />
      <div
        style={{
          width: 1440,
          height: 1024,
          position: "relative",
          overflow: "hidden",
          background: "#fff"
        }}
      >

        {/* 아이디 입력창 */}
        <input
            type="text"
            placeholder="아이디"
            value={formData.id}
            onChange={(e) => handleChange("id", e.target.value)}
            style={{
              position : "absolute",
              left : 492,
              top : 100,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />

        {/* 비밀번호 입력창 */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            style={{
              position : "absolute",
              left : 492,
              top : 187,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />

        {/* 비밀번호 재확인 입력창 */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호 재확인"
            value={formData.passwordCheck}
            onChange={(e) => handleChange("passwordCheck", e.target.value)}
            style={{
              position : "absolute",
              left : 492,
              top : 274,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />

        {/* 이름 입력창 */}
          <input
            type="text"
            placeholder="이름"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            style={{
              position : "absolute",
              left : 492,
              top : 380,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />

          {/* 가입하기 버튼 */}
        <div style={{ width: "503.17px", height: 65 }}>
          <div
            style={{
              width: "503.17px",
              height: 65,
              position: "absolute",
              left: "485.5px",
              top: "771.5px",
              borderRadius: 10,
              background: "#000",
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <p
            onClick={handleSignup}
            style={{
              width: "208.46px",
              position: "absolute",
              left: "632.16px",
              top: 768,
              fontSize: 24,
              fontWeight: 600,
              textAlign: "center",
              color: "#fff"
            }}
          >
            가입하기
          </p>
        </div>

        {/* 생년월일 입력창 */}
          <input
            type="text"
            placeholder="YYYY"
            maxLength={4}
            value={formData.year} 
            onChange={(e) => handleChange("year", e.target.value)} 
            style={{
              position : "absolute",
              left : 492,
              top : 467,
              width: 150,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />
          <input
            type="text"
            placeholder="MM"
            maxLength={2}
            value={formData.month}
            onChange={(e) => handleChange("month", e.target.value)} 
            style={{
              position : "absolute",
              left : 664.5,
              top : 467,
              width: 150,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />
          <input
            type="text"
            placeholder="DD"
            maxLength={2}
            value={formData.day}
            onChange={(e) => handleChange("day", e.target.value)}
            style={{
              position : "absolute",
              left : 836,
              top : 467,
              width: 150,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />

        <div style={{ width: 494, height: 161 }}>
          <div
            style={{
              width: 150,
              height: 70,
              position: "absolute",
              left: 834.5,
              top: 660,
              background: "#eee",
              borderWidth: 1,
              borderColor: "#000",
              outline : "3px solid",
            }}
          />
          <p
            style={{
              position: "absolute",
              left: 848,
              top: 660,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            인증번호 받기
          </p>

          <input
            type="text"
            placeholder= "전화번호"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            style={{
              position : "absolute",
              left : 490.5,
              top : 570,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />  

          <input
            type="text"
            placeholder= "병동이름"
            style={{
              position : "absolute",
              left : 492,
              top : 660,
              width: 324,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />  
        </div>
        <img
          src="image-7.png"
          alt = "비밀번호 보기"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            left: 939,
            top: 205,
            objectFit: "cover"
          }}
        />
        <img
          src="image-7.png"
          alt = "비밀번호 보기"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            left: 939,
            top: 293,
            objectFit: "cover"
          }}
        />
      </div>
    </>
  );
};
  
  export default Signup;