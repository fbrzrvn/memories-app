import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import Main from '../layout/Main';
import RecipeGrid from '../components/RecipeGrid';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/recipes')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Main>
      <Grid container spacing={2} style={{ marginTop: '32px' }}>
        {!data
          ? 'loading...'
          : data.map(recipe => (
              <Grid item key={recipe._id} xs={12} sm={6} md={4}>
                <RecipeGrid recipe={recipe} />
              </Grid>
            ))}
      </Grid>
    </Main>
  );
};

export default Home;
