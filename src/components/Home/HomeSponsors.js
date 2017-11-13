import React from "react";
import sponsors from "./../../data/sponsors.json";

const HomeSponsors = () => {
  return (
    <div className="home-sponsors container text-center py-5 col-md-9">
      <h2>Sponsors</h2>
      <div className="row sponsors-row text-center">
        {sponsors.map(sponsor => (
          <div
            key={sponsor.id}
            className="col-md-2 col-sm-4 col-xs-7 container"
          >
            <a href={sponsor.website} target="_blank">
              <img width="150px" src={sponsor.logo} alt={sponsor.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSponsors;
