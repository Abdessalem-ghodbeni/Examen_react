import React, { useEffect } from "react";
import Competition from "./Competition";

const Competitions = ({ competitions }) => {
  useEffect(() => {
    console.log(competitions);
  });
  return (
    <div className="container p-2 mt-5">
      <h2>Liste des compétitions</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Date</th>
            <th>Frais</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {competitions.map((competition) => (
            <Competition
              key={competition.id}
              id={competition.id}
              name={competition.name}
              date={competition.date}
              fees={competition.fees}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Competitions;
