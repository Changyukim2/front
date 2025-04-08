import React from "react";
import { useNavigate } from "react-router-dom";

export const Findpw = () => {
  const navigate = useNavigate();

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

      {/* 비밀번호 찾기 타이틀 */}
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
            left: 520,
            top: 74,
            fontSize: 64,
            fontWeight: 700,
            textAlign: "left",
            color: "#000"
          }}
        >
          비밀번호 찾기
        </p>
          <input
            type="text"
            placeholder="아이디"
            style={{
              position : "absolute",
              left : 472.5,
              top : 245,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />
        <div
            style={{
              width: 139,
              height: 46,
              position: "absolute",
              left: "816px",
              top: 515,
              background: "#eee",
              borderWidth: 1,
              borderColor: "#000",
              zIndex : 20,
              outline : "2px solid",
            }}
          />
          <p
            style={{
              width: 128,
              height: 38,
              position: "absolute",
              left: 822,
              top: 503,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "left",
              color: "#000",
              zIndex : 20,
            }}
          >
            인증번호 받기
          </p>
          <input
            type="text"
            placeholder="인증번호 입력"
            style={{
              position : "absolute",
              left : 472.5,
              top : 502,
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
            placeholder="전화번호"
            style={{
              position : "absolute",
              left : 472.5,
              top : 416,
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
            placeholder="이름"
            style={{
              position : "absolute",
              left : 472.5,
              top : 330,
              width: 494,
              height: 70,
              background: "#eee",
              border : "1px solid #000",
              fontSize : 25,
              paddingLeft : 20,
              boxSizing : "border-box"
            }}
          />
        </div>
          <div
            style={{
              width: "503.17px",
              height: 65,
              position: "absolute",
              left: 468,
              top: 590,
              borderRadius: 10,
              background: "#000",
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <p
            onClick={() => navigate("/resetpw")}
            style={{
              width: "300",
              position: "absolute",
              left: 618,
              top: 583,
              fontSize: 24,
              fontWeight: 600,
              textAlign: "center",
              color: "#fff"
            }}
          >
            비밀번호 재설정하기
          </p>
    </>
  );
};

export default Findpw;