import { useState } from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const Comments = ({ comments }) => {
  const [isComment, setIsComment] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.cardComments}>
        <Typography variant="h4">Comments</Typography>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => setIsComment(!isComment)}
        >
          Add a comment
        </Button>
      </Grid>

      {isComment ? (
        <Grid container className={classes.cardComment}>
          <Typography variant="h2" color="primary" gutterBottom>
            Comment Form
          </Typography>
        </Grid>
      ) : null}

      <Grid container className={classes.cardComment}>
        {comments?.length ? (
          <Grid item>
            <Typography variant="h6">author</Typography>
            <Typography variant="body1" gutterBottom>
              comment text
            </Typography>
            <Divider />
          </Grid>
        ) : (
          <Grid item>
            <Typography variant="body1">
              This recipe does not have any comments yet
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Comments;
