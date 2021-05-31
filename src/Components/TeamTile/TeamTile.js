import React from "react";
import "./TeamTile.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
function TeamTile({ team }) {
  const { setPageLoading } = useGlobalContext();
  const handleChangeTeam = () => {
    setPageLoading(true);
  };
  return (
    <Link
      to={`/IplDashboard/team/${team}`}
      className={`TeamTile ${team.replaceAll(" ", "")}-color`}
      onClick={() => handleChangeTeam()}
    >
      {team}
    </Link>
  );
}

export default TeamTile;
