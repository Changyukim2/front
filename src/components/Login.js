import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  {/* 로그인 처리 함수 */}
  const handleLogin = async () => {
    try {
      const form = new URLSearchParams();
      form.append("member_id", username);
      form.append("passwd", password);
  
      const response = await fetch("http://localhost:8000/member/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: form,
        credentials: "include" // 세션 쿠키를 받기 위해 필요
      });
  
      // 성공 시: Django는 redirect로 HTML 응답을 보냄 → 여기선 상태 코드로만 판단
      if (response.ok) {
        alert("로그인 성공!");
        navigate("/"); // 원하는 페이지로 이동
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다.");
      console.error("Login error:", error);
    }
  };
  
  
  return(
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: 200,
            position: "absolute",
            left: 630,
            top: 90,
            gap: 24
          }}
        >
          <p
            style={{
              flexGrow: 0,
              flexShrink: 0,
              width: 214,
              fontSize: 64,
              fontWeight: 700,
              textAlign: "left",
              color: "#000"
            }}
          >
            로그인
          </p>
        </div>

        {/* 아이디 입력 박스 배경 */}
        <div
          style={{
            width: 533,
            height: 79,
            position: "absolute",
            left: 454,
            top: 269,
            background: "#efefef",
            borderWidth: 1,
            borderColor: "#000"
          }}
        />

        {/* 비밀번호 입력 박스 배경 */}
        <div
          style={{
            width: 533,
            height: 79,
            position: "absolute",
            left: 454,
            top: 372,
            background: "#efefef",
            borderWidth: 1,
            borderColor: "#000"
          }}
        />

        {/* 아이디 입력창 */}
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            position: "absolute",
            left: 454,
            top: 269,
            width: 533,
            height: 79,
            paddingLeft: 80,
            fontSize: 24,
            border: "none",
            background: "transparent",
            outline: "none",
            zIndex : 20,
          }}
        />

        {/* 비밀번호 입력창 */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            position: "absolute",
            left: 454,
            top: 372,
            width: 533,
            height: 79,
            paddingLeft: 80,
            fontSize: 24,
            border: "none",
            background: "transparent",
            outline: "none",
            zIndex : 15,
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
            top: 397,
            objectFit: "cover",
            zIndex : 20,
            cursor : "pointer",
          }}
        />
        <div
          style={{
            width: 573,
            height: 414,
            position: "absolute",
            left: 433,
            top: 233,
            borderRadius: 5,
            background: "transparent",
            borderWidth: 1,
            borderColor: "#c6c6c6"
          }}
        />
        <div
          style={{
            width: 573,
            height: 414,
            position: "absolute",
            left: 433,
            top: 233,
            borderRadius: 5,
            background: "transparent",
            borderWidth: 1,
            borderColor: "#c6c6c6"
          }}
        />
        <div style={{ width: 70, height: 79 }}>
          <div
            style={{
              width: 70,
              height: 79,
              position: "absolute",
              left: "454.5px",
              top: "269.5px",
              background: "#efefef",
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <img
            src="image-4.png"
            style={{
              width: "65.88px",
              height: "65.88px",
              position: "absolute",
              left: "456.56px",
              top: "276.56px",
              objectFit: "cover"
            }}
          />
        </div>
        <div style={{ width: 70, height: 79 }}>
          <div style={{ width: 70, height: 79 }}>
            <div
              style={{
                width: 70,
                height: 79,
                position: "absolute",
                left: "454.5px",
                top: "372.5px",
                background: "#efefef",
                borderWidth: 1,
                borderColor: "#000"
              }}
            />
          </div>
          <img
            src="image-6.png"
            style={{
              width: 62,
              height: 62,
              position: "absolute",
              left: "458.5px",
              top: "381.5px",
              objectFit: "cover"
            }}
          />
        </div>
        <div style={{ width: 533, height: "58.5px" }}>
          <div style={{ width: 533, height: "58.5px" }}>
            <div
              style={{
                width: 533,
                height: "58.5px",
                position: "absolute",
                left: "453.5px",
                top: "492.5px",
                borderRadius: 10,
                background: "#000"
              }}
            />
          </div>
          <div style={{ width: 66, height: 29 }}>
            <p
              onClick={handleLogin}
              style={{
                position: "absolute",
                left: 687,
                top: 483,
                fontSize: 24,
                fontWeight: 600,
                textAlign: "center",
                color: "#fff"
              }}
            >
              로그인
            </p>
          </div>
        </div>
        <div style={{ width: 452, height: 29 }}>
          <p
            style={{
              position: "absolute",
              left: 640,
              top: 581,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            |
          </p>
          <p
            onClick={() => navigate("/findid")}
            style={{
              position: "absolute",
              left: 494,
              top: 581,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            아이디 찾기  
          </p>
          
          <p
            onClick={() => navigate("/findpw")}
            style={{
              position: "absolute",
              left: 666,
              top: 581,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            비밀번호 찾기
          </p>

          <p
            style={{
              position: "absolute",
              left: 829,
              top: 581,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            |
          </p>
          <p
            onClick={() => navigate("/signup")}
            style={{
              position: "absolute",
              left: 859,
              top: 581,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            회원가입
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;