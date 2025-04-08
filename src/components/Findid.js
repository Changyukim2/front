import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Findid = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleFindId = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/find-id", {
        name,
        phone,
      });
      alert(`당신의 아이디는: ${response.data.userId}`);
    } catch (error) {
      alert("아이디를 찾을 수 없습니다.");
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

      {/* 아이디 찾기 타이틀 */}
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
          onClick={handleFindId}
          style={{
            position: "absolute",
            left: 556,
            top: 74,
            fontSize: 64,
            fontWeight: 700,
            textAlign: "left",
            color: "#000"
          }}
        >
          아이디 찾기
        </p>

        {/* 이름 입력 */}
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
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
        </div>
        <div style={{ width: 494, height: 161 }}>
          {/* 인증번호 받기 스타일 */}
          <div
            style={{
              width: 139,
              height: 46,
              position: "absolute",
              left: "816px",
              top: "434px",
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
              top: 422,
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
              top : 422,
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
            onChange={(e) => setPhone(e.target.value)}
            style={{
              position : "absolute",
              left : 472.5,
              top : 335,
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
        <div style={{ width: 494, height: 65 }}>
          <div
            style={{
              width: 494,
              height: 65,
              position: "absolute",
              left: "472.5px",
              top: "590.5px",
              borderRadius: 10,
              background: "#000",
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <p
            style={{
              width: "268.17px",
              height: 29,
              position: "absolute",
              left: "585.91px",
              top: 584,
              fontSize: 24,
              fontWeight: 600,
              textAlign: "center",
              color: "#fff"
            }}
          >
            아이디 찾기
          </p>
        </div>
        <p
          style={{
            width: 466,
            height: 29,
            position: "absolute",
            left: 484,
            top: 531,
            fontSize: 24,
            fontWeight: 600,
            textAlign: "center",
            color: "#000"
          }}
        >
          고객님의 아이디는 00000000 입니다
        </p>
        <p
          style={{
            width: 337,
            height: 19,
            position: "absolute",
            left: 474,
            top: 484,
            fontSize: 16,
            fontWeight: 600,
            textAlign: "left",
            color: "#f70a0a"
          }}
        >
          * 인증번호가 올바르지 않습니다
        </p>
    </>
  );
};
  export default Findid;