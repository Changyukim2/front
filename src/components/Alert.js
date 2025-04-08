import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";

function Alert() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fall-alerts/")
      .then((res) => {
        const sorted = res.data
          .sort((a, b) => new Date(b.fall_date) - new Date(a.fall_date)) // 최신순 정렬
          .slice(0, 5); // 상위 5개만
        setAlerts(sorted);
      })
      .catch((err) => {
        console.error("알림 불러오기 실패:", err);
      });
  }, []);

  const getAlertClass = (level) => {
    if (level.includes("1")) return "alert-card step1"; // 빨강 (심각)
    if (level.includes("2")) return "alert-card step2"; // 노랑 (중간)
    return "alert-card step3"; // 파랑 (경미)
  };
  

  return (
    <div className="alert">
      {/* GNB */}
      <div className="gnb">
        <div className="gnb-inner">
          <div className="logo">
            <h1><a href="/">Home</a></h1>
          </div>
          <ul className="gnb-menu">
            <li><a href="/my_page">마이페이지</a></li>
            <li><a href="/history">이력조회</a></li>
            <li><a href="/alert">알림확인</a></li>
            <li><a href="/login">로그인</a></li>
          </ul>
        </div>
      </div>

      {/* 본문 */}
      <div className="content">
        <h2 className="page-title">낙상 알림 목록</h2>

        {alerts.length === 0 ? (
          <p>알림이 없습니다.</p>
        ) : (
          alerts.map((alert) => (
            <div className={getAlertClass(alert.fall_level)} key={alert.id}>
              <p><strong>환자명:</strong> {alert.name}</p>
              <p><strong>병동/호실:</strong> {alert.ward_name} {alert.room_number}</p>
              <p><strong>낙상 단계:</strong> {alert.fall_level}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Alert;
