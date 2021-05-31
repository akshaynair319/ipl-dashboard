import React from "react";
import "./SmallMatchCard.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
function SmallMatchCard({ team, match }) {
  const { setPageLoading } = useGlobalContext();
  const otherTeam = match.team1 === team ? match.team2 : match.team1;

  const handleTeamChange = () => {
    setPageLoading(true);
  };

  return (
    <div className={`SmallMatchCard ${match.matchWinner.replaceAll(" ", "")}`}>
      <span>vS</span>
      <Link
        to={`/IplDashboard/team/${otherTeam}`}
        className="team"
        onClick={handleTeamChange}
      >
        <h2>{otherTeam}</h2>
      </Link>
      <div className="match-result">
        <h1>
          {match.matchWinner} won the match by {match.resultMargin} {match.result}
        </h1>
      </div>
    </div>
  );
}

export default SmallMatchCard;
