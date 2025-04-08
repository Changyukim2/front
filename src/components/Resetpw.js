import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const Resetpw = () => {
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
        <p
          style={{
            position: "absolute",
            left: 486,
            top: 90,
            fontSize: 64,
            fontWeight: 700,
            textAlign: "left",
            color: "#000"
          }}
        >
          비밀번호 재설정
        </p>
        <div style={{ width: 494, height: 65 }}>
          <div
            style={{
              width: 494,
              height: 65,
              position: "absolute",
              left: 468,
              top: 460,
              borderRadius: 10,
              background: "#000",
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <p
            onClick={() => navigate("/login")}
            style={{
              width: "371.68px",
              height: 29,
              position: "absolute",
              left: 530,
              top: 452,
              fontSize: 24,
              fontWeight: 600,
              textAlign: "center",
              color: "#fff"
            }}
          >
            비밀번호 재설정
          </p>
        </div>
                {/* 비밀번호 입력창 */}
                <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호"
            style={{
              position : "absolute",
              left : 470,
              top : 270,
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
              left : 470,
              top : 360,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
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
            left: 922,
            top: 290,
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
            left: 922,
            top: 380,
            objectFit: "cover"
          }}
        />
      </div>
    </>
  );
};

export default Resetpw;