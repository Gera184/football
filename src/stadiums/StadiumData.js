import React from "react";

const StadiumData = ({ capacity, city, stadium }) => {
  return (
    <div className="card">
      <h2>
        {city},{stadium}
      </h2>
      <p>capacity: {capacity}</p>
    </div>
  );
};

export default StadiumData;
