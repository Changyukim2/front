import React from "react";
import { useNavigate } from "react-router-dom";

export const Start = () => {
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
        <div style={{ width: 872, height: 441 }}>
          <p
            style={{
              position: "absolute",
              left: 284,
              top: 291,
              fontSize: 128,
              fontWeight: 700,
              textAlign: "left",
              color: "#000"
            }}
          >
            낙상 방지 시스템
          </p>
          <p
            style={{
              position: "absolute",
              left: 288,
              top: 550,
              fontSize: 40,
              fontWeight: 700,
              textAlign: "left",
              color: "#000"
            }}
          >
            환자의 낙상 위험도를 측정하여 감지하는 시스템입니다
          </p>
          <div
            style={{
              width: 481,
              height: 141,
              position: "absolute",
              left: 490,
              top: 700,
              borderRadius: 15,
              background: "#000"
            }}
          />
          <p
            onClick={() => navigate("/main")}
            style={{
              position: "absolute",
              left: 604,
              top: 660,
              fontSize: 64,
              fontWeight: 700,
              textAlign: "left",
              color: "#fff"
            }}
          >
            시작하기
          </p>
        </div>
      </div>
    </>
  );
};

  export default Start;