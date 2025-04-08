import React from "react";
import { useNavigate } from "react-router-dom";

export const Mypage = ({onClose, onLogout}) => {
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
        <p
          style={{
            width: 248,
            height: 48,
            position: "absolute",
            left: 98,
            top: 130,
            fontSize: 32,
            textAlign: "left",
            color: "#000"
          }}
        >
          이름 : 홍길동
        </p>
        <p
          style={{
            width: 341,
            height: 48,
            position: "absolute",
            left: 98,
            top: 210,
            fontSize: 32,
            textAlign: "left",
            color: "#000"
          }}
        >
          아이디 : asdf123
        </p>
        <p
          style={{
            width: 436,
            height: 48,
            position: "absolute",
            left: 98,
            top: 290,
            fontSize: 32,
            textAlign: "left",
            color: "#000"
          }}
        >
          전화번호 : 010-1234-4562
        </p>
        <p
          style={{
            width: 367,
            height: 48,
            position: "absolute",
            left: 98,
            top: 370,
            fontSize: 32,
            textAlign: "left",
            color: "#000"
          }}
        >
          생년월일 : 0000.00.00
        </p>

        {/* 로그아웃 버튼 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 663,
            position: "absolute",
            left: 78,
            top: 526,
            gap: 8,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 8,
            background: "#000",
            boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)",
            cursor : "pointer",
          }}
          onClick={() =>{
            onClose();
            navigate("/");
          }}
        >
          <p
            style={{
              flexGrow: 0,
              flexShrink: 0,
              fontSize: 16,
              fontWeight: 500,
              textAlign: "left",
              color: "#fff"
            }}
          >
            로그아웃
          </p>
        </div>
        <p
          style={{
            width: 330,
            height: 52,
            position: "absolute",
            left: 35,
            top: 10,
            fontSize: 24,
            textAlign: "left",
            color: "#000"
          }}
        >
          마이페이지
        </p>
        <img
          src="image-10.png"
          alt = "닫기"
          onClick={onClose}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            left: 810,
            top: 29,
            objectFit: "cover"
          }}
        />
      </div>
    </>
  );
};

export default Mypage;