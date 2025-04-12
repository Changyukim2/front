import React from "react";
import GNB from "./GNB"; // ✅ 공통 GNB 컴포넌트
import "../style.css";

export const Main = () => {
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

        {/* ✅ 본문 콘텐츠 */}
        <div
          style={{
            maxWidth: 1200,
            margin: "180px auto 0", // GNB 높이 고려하여 위쪽 여백 조정
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#000",
              marginBottom: 24,
            }}
          >
            낙상 감지 시스템
          </h1>
          <p
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#444",
              lineHeight: 1.6,
            }}
          >
            본 시스템은 환자의 실시간 움직임을 감지하여 낙상 위험 상황을 빠르게 인식하고 경고합니다.
            <br />
            실시간 알림을 통해 보다 안전한 환경을 제공합니다.
            감지화면에서 현재 환자의 상태를 확인해보세요.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
