import React, { useEffect, useState } from "react";
import "../style.css";

function LiveFallAlert() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8000/api/fall-alert-stream/");

    eventSource.onmessage = (e) => {
      const newAlert = JSON.parse(e.data);
      setAlert(newAlert); // 새 알림으로 대체
    };

    eventSource.onerror = (e) => {
      console.error("SSE 연결 에러:", e);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const getClassByStep = (level) => {
    switch (level) {
      case 1: return "sse-card step1";
      case 2: return "sse-card step2";
      case 3: return "sse-card step3";
      default: return "sse-card";
    }
  };

  if (!alert) return null; // 알림 없으면 렌더링 안함

  return (
    <div className="live-alert-box">
      <div
        className={getClassByStep(alert.fall_level)}
        onClick={() => setAlert(null)} // 클릭 시 알림 제거
        style={{ cursor: "pointer" }}
      >
        <strong>{alert.fall_level}단계</strong> 낙상 발생! (클릭 시 닫힘)
      </div>
    </div>
  );
}

export default LiveFallAlert;
