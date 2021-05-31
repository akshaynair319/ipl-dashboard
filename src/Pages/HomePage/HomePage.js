import React, { useEffect } from "react";
import { TeamNames } from "./../../MockData/TeamNames";
import TeamTile from "./../../Components/TeamTile/TeamTile";
import "./HomePage.css";
import { useGlobalContext } from "./../../Context/Context";
import Loading from "../../Components/Loading/Loading";
function HomePage() {
  const { loading, setPageLoading } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 500);
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="HomePage">
      <div className="HomePageTitle">
        <h1>
          <li></li> <li></li>
          <span className="Small-text">
            Welcome to Your{" "}
            <span className="Big-text" style={{ margin: "0" }}>
              IPL Dashboard
            </span>
          </span>
          <li></li> <li></li>
        </h1>
      </div>
      {TeamNames.map((team, index) => {
        return <TeamTile key={index} team={team} />;
      })}
    </div>
  );
}

export default HomePage;
