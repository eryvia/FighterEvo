import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
      
  return (
    <nav className="tab-bar">
      <button
        className={`tab ${pathname === "/" ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
        <span className="tab-label">Home</span>
      </button>

      <button
        className={`tab ${pathname === "/evo" ? "active" : ""}`}
        onClick={() => navigate("/evo")}
      >
        <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
        <span className="tab-label">Evo</span>
      </button>

      <button
        className={`tab ${pathname === "/leaderboard" ? "active" : ""}`}
        onClick={() => navigate("/leaderboard")}
      >
        <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="3" width="4" height="18" rx="1" />
          <rect x="10" y="8" width="4" height="13" rx="1" />
          <rect x="2" y="13" width="4" height="8" rx="1" />
        </svg>
        <span className="tab-label">LeadB</span>
      </button>
      
      
    </nav>
  );
}
