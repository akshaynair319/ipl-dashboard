import React from "react";
import "./YearSelector.css";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./../../Context/Context";
import { years } from "./../../MockData/Years";
function YearSelector() {
  const { setPageLoading } = useGlobalContext();
  const { team, year } = useParams();
  return (
    <div className="YearSelector">
      <Link
        to={`/IplDashboard/team/${team}/all/${
          year === "2008" ? "2020" : parseInt(year) - 1
        }`}
        onClick={() => setPageLoading(true)}
        className={`${team.replaceAll(" ", "") + "-color"}`}
      >
        {"<"}
      </Link>
      {years.map((myYear, index) => {
        return (
          <Link
            key={index}
            to={`/IplDashboard/team/${team}/all/${myYear}`}
            onClick={() => setPageLoading(true)}
            className={`${
              year === myYear
                ? "current-year"
                : team.replaceAll(" ", "") + "-color"
            }`}
          >
            {myYear}
          </Link>
        );
      })}
      <Link
        to={`/IplDashboard/team/${team}/all/${
          year === "2020" ? "2008" : parseInt(year) + 1
        }`}
        onClick={() => setPageLoading(true)}
        className={`${team.replaceAll(" ", "") + "-color"}`}
      >
        {">"}
      </Link>
    </div>
  );
}

export default YearSelector;
