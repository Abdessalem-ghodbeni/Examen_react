import React from "react";
import { Link } from "react-router-dom";

const Competition = ({ id, name, date, fees }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{fees}</td>
      <td>
        <Link to={`/DetailsCompetition/${id}`} className="btn btn-info">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Competition;
