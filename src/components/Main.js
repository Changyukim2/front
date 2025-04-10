import React from "react";
import GNB from "./GNB"; // ✅ 공통 GNB 컴포넌트
import "../style.css";

export const Main = () => {
  return (
    <>
      <div
        style={{
          width: 1440,
          height: 1024,
          position: "relative",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {/* ✅ 공통 GNB 사용 */}
        <GNB />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: 844,
            position: "absolute",
            left: 80,
            top: 180, // GNB 높이만큼 아래로 조정
            gap: 40,
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
              top: -20,
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
                color: "#000",
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
            boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              flexGrow: 0,
              flexShrink: 0,
              fontSize: 24,
              fontWeight: 500,
              textAlign: "left",
              color: "#fff",
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
            background: "#000",
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
            outline: "1px solid",
          }}
        />
      </div>
    </>
  );
};

export default Main;
