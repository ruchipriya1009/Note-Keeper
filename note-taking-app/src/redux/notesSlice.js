import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({
        id: new Date().getTime(),
        title: action.payload.title,
        content: action.payload.content,
        pinned: false,
      });
    },
    pinNote: (state, action) => {
      const note = state.find((note) => note.id === action.payload);
      if (note) {
        note.pinned = !note.pinned;
      }
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, pinNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
