import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div>
      <h1>{!data ? 'loading...' : data}</h1>
    </div>
  );
};

export default App;
