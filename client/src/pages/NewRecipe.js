import { Container } from '@material-ui/core';

import Main from '../layout/Main';
import RecipeForm from '../components/RecipeForm';

const NewRecipe = () => {
  return (
    <Main>
      <Container maxWidth="sm">
        <RecipeForm />
      </Container>
    </Main>
  );
};

export default NewRecipe;
