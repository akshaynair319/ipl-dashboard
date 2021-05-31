import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "./../../Components/Loading/Loading";
import BigMatchCard from "./../../Components/BigMatchCard/BigMatchCard";
import MatchesScrollBar from "./../../Components/MatchesScrollBar/MatchesScrollBar";
import { Link } from "react-router-dom";
import "./TeamPage.css";
import { useGlobalContext } from "./../../Context/Context";
function TeamPage() {
  const { team } = useParams();
  const {
    someMatches: matches,
    loading,
    getSomeMatches,
    setPageLoading,
  } = useGlobalContext();

  useEffect(() => {
    getSomeMatches();
  }, [team]);

  //show this component while getting api data
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="TeamPage">
      <div className={`teamName ${team.replaceAll(" ", "")}-color`}>
        <Link
          to="/"
          className={`btn AllTeams ${team.replaceAll(" ", "")}`}
          onClick={() => setPageLoading(true)}
        >
          Home Page
        </Link>

        <h1>{team}</h1>
      </div>
      <div className="teamMatches">
        {/* return mathches[0] */}
        <BigMatchCard matchDetails={matches[0]} />
        {/* return matches[1:-1] */}
        <MatchesScrollBar
          team={team}
          smallMatches={[matches[1], matches[2], matches[3]]}
        />
      </div>
    </div>
  );
}

export default TeamPage;
