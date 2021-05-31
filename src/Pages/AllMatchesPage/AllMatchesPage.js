import React, { useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import { useGlobalContext } from "./../../Context/Context";
import { useParams } from "react-router-dom";
import Match from "./../../Components/Match/Match";
import { Link } from "react-router-dom";
import YearSelector from "./../../Components/YearSelector/YearSelector";
import NoMatchesFound from "./../../Components/NoMatchesFound/NoMatchesFound";
import "./AllMatchesPage.css";
function AllMatchesPage() {
  const { team, year } = useParams();
  const {
    loading,
    allMatches: matches,
    getAllMatches,
    setPageLoading,
  } = useGlobalContext();

  useEffect(() => {
    getAllMatches();
  }, [team, year]);

  if (loading) {
    return <Loading />;
  }

  console.log(matches);
  return (
    <div className="AllMatchesPage">
      <div className="title-page">
        <Link
          to="/"
          className={`btn AllTeams ${team.replaceAll(" ", "")}`}
          onClick={() => setPageLoading(true)}
        >
          Home Page
        </Link>
        <h1 className={`${team.replaceAll(" ", "")}-color`}>
          {team} matches for the year : {year}
          <YearSelector />
        </h1>
      </div>

      {matches.length !== 0 &&
        matches.map((match, index) => {
          return <Match key={index} matchDetails={match} />;
        })}

      {matches.length === 0 && <NoMatchesFound />}
    </div>
  );
}

export default AllMatchesPage;
