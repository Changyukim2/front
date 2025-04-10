import React, { useEffect, useState } from "react";
import axios from "axios";

import Mypage from "./Mypage"; // 마이페이지 컴포넌트 import
import "../style.css";
import GNB from "./GNB";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [showMypage, setShowMypage] = useState(false); // 팝업 상태 추가

  // 이력조회 API
  const fetchHistory = (name = "") => {
    axios
      .get("http://localhost:8000/member/fall/list/", {
        params: name ? { name } : {},
      })
      .then((res) => {
        setHistoryData(res.data);
      })
      .catch((err) => {
        console.error("이력 데이터 불러오기 실패", err);
      });
  };

  useEffect(() => {
    fetchHistory(); // 페이지 처음 로드시 전체 이력 불러오기
  }, []);

  const handleSearch = () => {
    fetchHistory(searchName.trim());
  };

  return (
    <div className="history container">
      <GNB />

      {/* 본문 */}
      <main className="content">
        <h2 className="page-title">낙상이력 조회</h2>

        {/* 검색창 */}
        <section className="search-section">
          <label htmlFor="search-name">환자명</label>
          <input
            type="text"
            id="search-name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          <button className="search-btn" onClick={handleSearch}>검색</button>
        </section>

        {/* 이력 테이블 */}
        <section className="history-section">
          <table className="history-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>나이</th>
                <th>병동/호실</th>
                <th>발생일</th>
                <th>낙상 단계</th>
                <th>낙상 부위</th>
                <th>특이사항</th>
              </tr>
            </thead>
            <tbody>
              {historyData.length > 0 ? (
                historyData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.ward_name} {item.room_number}</td>
                    <td>{item.fall_date}</td>
                    <td>{item.fall_level}</td>
                    <td>{item.fall_area || "-"}</td>
                    <td>{item.note || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    조회된 낙상이력이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="note">
            ※ 자세한 정보는 <a href="/alert">알림확인</a>에서 조회 가능합니다.
          </p>
        </section>
      </main>

      {/* 마이페이지 팝업 */}
      {showMypage && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Mypage onClose={() => setShowMypage(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default History;
