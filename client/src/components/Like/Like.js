import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

const Like = ({ recipe }) => {
  const user = JSON.parse(localStorage.getItem('userProfile'));

  if (recipe?.likes?.length > 0) {
    return recipe.likes.find(
      like => like === user?.result?.googleId || user?.result?._id
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {recipe.likes.length > 2
          ? `You and ${recipe.likes.length - 1} others`
          : `${recipe.likes.length} like${recipe.likes.length > 1 ? 's' : ''}`}
      </>
    ) : (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{recipe.likes.length}{' '}
        {recipe.likes.length === 1 ? 'Like' : 'Likes'}
      </>
    );
  } else {
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  }
};

export default Like;
