import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    let getNotes = async () => {
      let response = await fetch("http://127.0.0.1:8000/api/notes/", {
        method: "GET",
        headers: {
          "Content-Type": "applications/json",
          "Authorization": "Bearer " + String(authTokens.access),
        },
      });
      let data = await response.json();

      if (response.status === 200) {
        setNotes(data);
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    };

    getNotes();
  }, [authTokens]);

  return (
    <div>
      <p>You are logged in to the home page!</p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
