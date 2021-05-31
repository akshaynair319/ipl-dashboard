import React from "react";
import "./NoMatchesFound.css";
import { useParams } from "react-router-dom";
function NoMatchesFound() {
  const { team, year } = useParams();
  return (
    <div className="NoMatchesFound">
      <h1>
        {team} did not take part in the {year} edition
      </h1>
    </div>
  );
}

export default NoMatchesFound;
