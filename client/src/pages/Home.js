import { useEffect, useState } from 'react';

import Main from '../layout/Main';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/recipes')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Main>
      {!data
        ? 'loading...'
        : data.map(r => (
            <div key={r._id}>
              <h2>{r.title}</h2>
              <p>{r.description}</p>
              <p>{r.difficulty}</p>
              <p>{r.serves}</p>
              <p>{r.createdAt}</p>
            </div>
          ))}
    </Main>
  );
};

export default Home;
