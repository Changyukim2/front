import React from "react";
import GNB from "./GNB"; // ✅ 공통 GNB import

const Detect = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {/* ✅ 상단 GNB */}
        <GNB />

        {/* 본문 콘텐츠 */}
        <div
          style={{
            marginTop: "100px", // GNB 높이 고려
            paddingLeft: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#000",
              margin: 0,
            }}
          >
            감지화면
          </h1>

          <button
            style={{
              width: "150px",
              height: "70px",
              fontSize: "20px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            보호 모드
          </button>
        </div>
      </div>
    </>
  );
};

export default Detect;
