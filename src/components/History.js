import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [searchName, setSearchName] = useState("");

  // API에서 이력 조회
  const fetchHistory = (name = "") => {
    axios
      .get("http://localhost:8000/api/fall-history/", {
        params: name ? { name } : {}, // ?name=홍길동 형태
      })
      .then((res) => {
        setHistoryData(res.data);
      })
      .catch((err) => {
        console.error("이력 데이터 불러오기 실패", err);
      });
  };

  // 컴포넌트 마운트 시 전체 이력 로드
  useEffect(() => {
    fetchHistory();
  }, []);

  const handleSearch = () => {
    fetchHistory(searchName.trim());
  };

  return (
    <div className="history container">
      <header className="gnb">
        <div className="gnb-inner">
          <h1 className="logo"><a href="/">Home</a></h1>
          <nav>
            <ul className="gnb-menu">
              <li><a href="/my_page">마이페이지</a></li>
              <li><a href="/history">이력조회</a></li>
              <li><a href="/alert">알림확인</a></li>
              <li><a href="/login">로그인</a></li>
            </ul>
          </nav>
        </div>
      </header>

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
                    <td>{item.memo || "-"}</td>
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
    </div>
  );
}

export default History;
