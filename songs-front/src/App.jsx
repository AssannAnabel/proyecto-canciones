import { useEffect, useState } from "react";
import "./App.css";
import { getSongs } from "./api/getSongs";
import  {ImMusic} from 'react-icons/im';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs()
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <>
    <div className="table-container">
      <table className="song-table">
        <thead>
          <h1>Canciones: <ImMusic className="icono"/></h1>
          <tr>
            <th>Artista</th>
            <th>Título</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.artist}</td>
              <td>{song.title} <ImMusic/></td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;