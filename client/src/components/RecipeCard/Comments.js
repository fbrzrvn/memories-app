import { useState } from 'react';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import useStyles from './styles';

const Comments = ({ comments }) => {
  const user = JSON.parse(localStorage.getItem('userProfile'));
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState('');
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    if (!comment) return;
    console.log(comment);
    setComment('');
  };

  return (
    <>
      <Grid container className={classes.cardComments}>
        <Typography variant="h4">Comments</Typography>
        <Button
          color="primary"
          variant="outlined"
          disabled={!user}
          onClick={() => setIsComment(!isComment)}
        >
          Add a comment
        </Button>
      </Grid>

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

      {isComment ? (
        <Grid container className={classes.cardComment}>
          <Paper
            component="form"
            className={classes.commentForm}
            onSubmit={handleSubmit}
          >
            <InputBase
              placeholder="Type a comment"
              inputProps={{ 'aria-label': 'type a comment' }}
              value={comment}
              onChange={e => setComment(e.target.value)}
              className={classes.commentInput}
            />
            <Divider orientation="vertical" className={classes.divider} />
            <IconButton
              color="primary"
              aria-label="send"
              type="submit"
              className={classes.iconButton}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </Grid>
      ) : null}
    </>
  );
};

export default Comments;
