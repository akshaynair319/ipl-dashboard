import React from "react";
import "./BigMatchCard.css";
import { useParams } from "react-router-dom";
function BigMatchCard({ matchDetails }) {
  const {
    city,
    date,
    playerOfMatch,
    result,
    resultMargin,
    team1,
    team2,
    tossDecision,
    tossWinner,
    umpire1,
    umpire2,
    venue,
    matchWinner,
  } = matchDetails;
  const { team } = useParams();
  return (
    <div
      className={`BigMatchCard ${team.replaceAll(" ", "")} ${
        team.replaceAll(" ", "") + "Background"
      }`}
    >
      <div className="matchTeams">
        <h3>
          {team1} <span>v/s</span> {team2}
        </h3>
      </div>
      <div className="grid1">
        <div className="location">
          <h4>
            played at {venue}, {city}
          </h4>
          <h4>on {date}</h4>
        </div>
        <div className="umpires">
          <h4>
            Umpires: {umpire1}, {umpire2}
          </h4>
        </div>
      </div>
      <div className="grid2">
        <div className="toss_result">
          <h4>
            {tossWinner} won the toss and chose to {tossDecision}
          </h4>
        </div>
        <div className="match_result">
          <h4>
            {matchWinner} won the match by {resultMargin} {result}
          </h4>
        </div>
        <div className="player_of_the_match">
          <h4>Player of the Match : {playerOfMatch}</h4>
        </div>
      </div>
    </div>
  );
}

export default BigMatchCard;
