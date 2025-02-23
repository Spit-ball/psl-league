import React from "react";

const StatsPage: React.FC = () => {
  return (
    <div>
      <h1>Rocket League Stats</h1>
      <div className="stats-container">
        <div className="stat-item">
          <h2>Goals</h2>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h2>Assists</h2>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h2>Saves</h2>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h2>Shots</h2>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
