import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
            onClick={() => navigate("/login")}
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
            placeholder="년"
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
            placeholder="월"
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
            placeholder="일"
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
            placeholder= "인증번호"
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