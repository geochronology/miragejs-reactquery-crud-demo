import React from 'react';
import "./App.css"
export default function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api/movies')
      .then((x) => x.json())
      .then(setData);
  }, []);

  return (
    <div className="App-header">
      <div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}
