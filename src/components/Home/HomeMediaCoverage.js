import React from 'react';
import media from "./../../data/media.json";

const HomeMediaCoverage = () => {
	return (
		<div className="home-media-coverage container text-center py-5 col-md-9">
			<h2 className="text-center">In the news</h2>

			<div className="row media-coverage-row">
			{media.map(item => (
          <div
            key={item.id}
            className="col-md-2 col-sm-4 col-xs-7 container"
          >
            <a href={item.link} target="_blank">
              <img width="150px" src={item.logo} alt={item.title} />
            </a>
          </div>
        ))}
			</div>
		</div>
	);
};

export default HomeMediaCoverage;
