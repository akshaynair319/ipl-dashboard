import React from "react";
import "./Matches.css";
import { useGlobalContext } from "./../../Context/Context";
import Loading from "../Loading/Loading";
import Match from "./../Match/Match";

const Matches = () => {
  const { loading, matches, closeSubMenu } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="Matches" onMouseOver={closeSubMenu}>
      {matches.map((match) => {
        return <Match key={match.id} matchDetails={match} />;
      })}
    </div>
  );
};

export default Matches;
