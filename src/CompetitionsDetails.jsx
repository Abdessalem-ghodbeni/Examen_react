import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddPlayer from "./AddPlayer";
import axios from "axios";
import { addParticipant } from "./ReduxToolkit/competitionsSlice";

function CompetitionsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const competitions = useSelector((state) => state.competitions);
  const competition = competitions.find((comp) => comp.id === id);

  if (!competition) {
    return <div>Compétition non trouvée</div>;
  }

  const handleParticipate = () => {
    setIsVisible(true);
  };

  const handlePlayerAdded = (username) => {
    dispatch(addParticipant({ competitionId: id, username }));
  };

  return (
    <div className="container p-2 mt-5 text-center">
      <div className="card p-3">
        <h2>Détails de la compétition</h2>
        <p>ID: {competition.id}</p>
        <p>Nom: {competition.name}</p>
        <p>Date: {competition.date}</p>
        <p>Frais: {competition.fees}</p>
        <p>Description: {competition.description}</p>
        <p>nombre participant: {competition.participants}</p>

        <button
          type="button"
          className="btn btn-warning"
          disabled={competition?.participants === 0}
          onClick={handleParticipate}
        >
          Participer
        </button>
      </div>

      {isVisible && (
        <AddPlayer competitionId={id} onPlayerAdded={handlePlayerAdded} />
      )}
    </div>
  );
}

export default CompetitionsDetails;
