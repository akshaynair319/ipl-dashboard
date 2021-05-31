import React from "react";
import MoreCard from "../MoreCard/MoreCard";
import SmallMatchCard from "../SmallMatchCard/SmallMatchCard";
import "./MatchesScrollBar.css";

function MatchesScrollBar({ team, smallMatches }) {
  return (
    <div className="MatchesScrollBar">
      {smallMatches.map((match, index) => (
        <SmallMatchCard key={index} team={team} match={match} />
      ))}
      <MoreCard team={team} />
    </div>
  );
}

export default MatchesScrollBar;
