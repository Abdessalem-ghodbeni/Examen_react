import React, { useState } from "react";
import axios from "axios";

function AddPlayer({ competitionId, onPlayerAdded }) {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      onPlayerAdded(username);
      setUsername("");
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Nom d'utilisateur"
        required
      />
      <button type="submit">Participer</button>
    </form>
  );
}

export default AddPlayer;
