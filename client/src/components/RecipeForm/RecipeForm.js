import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';

import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';

import { createRecipe } from '../../actions/recipe';

import useStyles from './styles';

const difficultyLevel = [
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Difficult', label: 'Difficult' },
];

const initialState = {
  title: '',
  description: '',
  ingridients: '',
  hoursToPrep: '',
  minutesToPrep: '',
  serves: '',
  difficulty: 'Easy',
  image: '',
};

const RecipeForm = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const clear = () => {
    setFormData(initialState);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.ingridients ||
      !formData.serves
    )
      return;

    dispatch(createRecipe({ ...formData }));
    clear();
    history.push('/');
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a new recipe</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="title"
              variant="outlined"
              label="title"
              fullWidth
              autoFocus
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              variant="outlined"
              label="description"
              fullWidth
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="ingridients"
              variant="outlined"
              label="ingridients"
              fullWidth
              value={formData.ingridients}
              onChange={e =>
                setFormData({
                  ...formData,
                  ingridients: e.target.value.split(','),
                })
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="hoursToPrep"
              label="Hours"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              fullWidth
              value={formData.hoursToPrep}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="minutesToPrep"
              label="Minutes"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 1, max: 60 } }}
              fullWidth
              value={formData.minutesToPrep}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="serves"
              label="Serves"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 1 } }}
              fullWidth
              value={formData.serves}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="difficulty"
              variant="outlined"
              label="difficulty"
              helperText="Please select a difficulty level"
              SelectProps={{ native: true }}
              fullWidth
              value={formData.difficulty}
              onChange={handleChange}
            >
              {difficultyLevel.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
        </Grid>
        <Grid item className={classes.btnContainer}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.btnForm}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={clear}
            className={classes.btnForm}
          >
            Clear
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default RecipeForm;
