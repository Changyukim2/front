import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mypage from "./Mypage";

export const Main = () => {
  const navigate = useNavigate();
  const [showMypage, setShowMypage] = useState(false);

  return(
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>낙상</title>
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
        {/* 상단 바 */}
        <div
          style={{
            width: 1440,
            height: 164,
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            background: "#fff"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "absolute",
              left: 883,
              top: 56,
              gap: 48
            }}
          >
            <p
              onClick={() => setShowMypage(true)}
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 500,
                textAlign: "left",
                color: "#000",
                cursor : "pointer",
              }}
            >
              마이페이지
            </p>
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 500,
                textAlign: "left",
                color: "#000"
              }}
            >
              알림확인
            </p>
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 500,
                textAlign: "left",
                color: "#000"
              }}
            >
              이력조회
            </p>

            {/* 로그인 버튼 */}
            <div
              onClick={() => navigate("/login")}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 0,
                flexShrink: 0,
                position: "relative",
                gap: 8,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 14,
                paddingBottom: 14,
                borderRadius: 8,
                background: "#000",
                boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)"
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
                로그인
              </p>
            </div>
          </div>

          {/* Home 버튼 */}
          <p
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              left: 80,
              top: 67,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "left",
              color: "#000"
            }}
          >
            Home
          </p>
        </div>

        {showMypage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.5)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ position: "relative" }}>
            <Mypage onClose={() => setShowMypage(false)} />
          </div>
        </div>
      )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: 844,
            position: "absolute",
            left: 80,
            top: 123,
            gap: 40
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignSelf: "stretch",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 24,
              top : -20
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                flexGrow: 0,
                flexShrink: 0,
                width: 844,
                fontSize: 64,
                fontWeight: 700,
                textAlign: "left",
                color: "#000"
              }}
            >
              낙상 방지 시스템
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "absolute",
            left: 54,
            top: 870,
            gap: 8,
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 8,
            background: "#000",
            boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)"
          }}
        >
          <p
            style={{
              flexGrow: 0,
              flexShrink: 0,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#fff"
            }}
          >
            보호 모드
          </p>
        </div>
        
        <div
          style={{
            width: 1332,
            height: 583,
            position: "absolute",
            left: 53,
            top: 270,
            borderRadius: 8,
            background: "#000"
          }}
        />
        <div
          style={{
            width: 705,
            height: 104,
            position: "absolute",
            left: 680,
            top: 870,
            borderRadius: 8,
            background: "#eee",
            borderWidth: 1,
            borderColor: "#000",
            outline : "1px solid"
          }}
        />
      </div>
    </>
  );
};

export default Main;
