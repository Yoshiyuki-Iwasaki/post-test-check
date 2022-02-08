import { LikeButton } from './styles';
import { useLike } from './hooks';

const Like = () => {
  const { count, liked, handleLike } = useLike();

  return (
    <LikeButton likedFlag={liked} data-testid="like" onClick={handleLike}>
      {count}
    </LikeButton>
  );
};

export default Like;
