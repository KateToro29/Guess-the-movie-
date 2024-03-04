
import React, { useState } from 'react';
import './App.css'

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "Back to the Future", emoji: "⏰🚗💥" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
  { name: "Schindler's List", emoji: "📜🚂🔴" },
  { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
  { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
  { name: "Fight Club", emoji: "👊💼🚽" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  
];

const App = () => {
  const [puntaje, setPuntaje] = useState(0);
  const [indicePeliculaActual, setIndicePeliculaActual] = useState(0);
  const [vidas, setVidas] = useState(3);
  const [respuestaUsuario, setRespuestaUsuario] = useState('');
  
  const peliculaActual = movies[indicePeliculaActual];

  const manejarRespuestaUsuario = () => {
    const respuestaEnMinusculas = respuestaUsuario.toLowerCase();
    const nombrePeliculaEnMinusculas = peliculaActual.name.toLowerCase();

    if (respuestaEnMinusculas === nombrePeliculaEnMinusculas) {
      
      setPuntaje(puntaje + 1);
      setIndicePeliculaActual(indicePeliculaActual + 1);
      setRespuestaUsuario('');
    } else {
      
      setVidas(vidas - 1);
      setRespuestaUsuario('');
    }
  };

  return (
    <div>
      <div className='ContainerPuntaje'>
        <p>Lives: {vidas}</p>
        <p> Points: {puntaje}</p>
        
      </div>
      <h1 className='Titulo'>Guess the Movie!</h1>
      {vidas > 0 ? (
        <div>
          <p>{peliculaActual.emoji}</p>
          
            <input
              type="text"
              className='CampoTexto'
              value={respuestaUsuario}
              onChange={(e) => setRespuestaUsuario(e.target.value)}
            />
          
            <button className='Send' onClick={manejarRespuestaUsuario}>Send</button>
        </div>
      ) : (
        <p>Juego terminado. Tu puntaje final es: {puntaje}</p>
      )}
    </div>
  );
};


export default App
