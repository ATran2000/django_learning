import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { client, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    let getNotes = () => {
      client.get("api/notes/", {
        withCredentials: true
      })
      .then(function(res) {
        setNotes(res.data)
      })
      .catch(function(error) {
        console.log(error)
      })
    }

    getNotes()
  }, [client, logoutUser]);

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
