import { LikeButton } from './styles';

const Presenter = ({ count, liked, handleLike }: any) => {
  return (
    <LikeButton
      likedFlag={liked}
      data-testid="like"
      onClick={() => handleLike()}
    >
      {count}
    </LikeButton>
  );
};

export default Presenter;
