import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSwapiData, clearSwapiData } from './actions/swapiActions';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  return (
    <div>
      <header>
        <h1>Swapi App</h1>
        <button onClick={() => dispatch(fetchSwapiData())}>Fetch Data</button>
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Height:</strong> {data.height} cm</p>
            <p><strong>Mass:</strong> {data.mass} kg</p>
            <p><strong>Hair Color:</strong> {data.hair_color}</p>
            <p><strong>Skin Color:</strong> {data.skin_color}</p>
            <p><strong>Eye Color:</strong> {data.eye_color}</p>
            <p><strong>Birth Year:</strong> {data.birth_year}</p>
            <p><strong>Gender:</strong> {data.gender}</p>
            <p><strong>Homeworld:</strong> {data.homeworld}</p>
            <p><strong>Films:</strong> {data.films.join(', ')}</p>
            <p><strong>Species:</strong> {data.species.join(', ')}</p>
            <p><strong>Vehicles:</strong> {data.vehicles.join(', ')}</p>
            <p><strong>Starships:</strong> {data.starships.join(', ')}</p>
            <p><strong>Created:</strong> {data.created}</p>
            <p><strong>Edited:</strong> {data.edited}</p>
            <p><strong>URL:</strong> {data.url}</p>
          </div>
        )}
      </main>
      <Footer onClear={() => dispatch(clearSwapiData())} />
    </div>
  );
}

export default App;
