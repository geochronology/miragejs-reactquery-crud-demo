import React from 'react';
import { useQuery } from 'react-query';
import "./App.css"

export default function App() {
  const { status, data, error } = useQuery('movies', () =>
    fetch('/api/movies').then((x) => x.json())
  );
  return (
    <div className="App-header">
      <div>{status}</div>
      {error && <div>{error}</div>}
      <div>
        {status === 'loading' ? (
          <span>Loading...</span>
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
              <ul>
                {data.map((movie) => (
                  <li key={movie.id}>
                    {movie.name} ({movie.year})
                  </li>
                ))}
              </ul>
            )}
      </div>
    </div>
  );
}

