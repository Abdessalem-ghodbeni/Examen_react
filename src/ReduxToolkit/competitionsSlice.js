import { createSlice } from "@reduxjs/toolkit";
import data from "../competitions.json";
const competitionsSlice = createSlice({
  name: "competitions",
  initialState: data.Competitions,
  reducers: {
    addParticipant(state, action) {
      const { competitionId, username } = action.payload;
      console.log(competitionId);
      console.log(username);

      const competition = state.find((comp) => comp.id === competitionId);

      if (competition) {
        const participantExists =
          competition.ListeParticipant.includes(username);
        console.log(competition.ListeParticipant);
        if (!participantExists) {
          console.log("adding");
          competition.ListeParticipant.push(username);
          competition.participants += 1;
        }
      }
    },
  },
});

export const { addParticipant } = competitionsSlice.actions;

export default competitionsSlice.reducer;
