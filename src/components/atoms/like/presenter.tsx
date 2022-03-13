import { LikeButton } from './styles';

const Presenter = ({ postData, handleLike }: any) => {
  return (
    <LikeButton
      likedFlag={postData.likeState}
      data-testid="like"
      onClick={() => handleLike(postData)}
    >
      {postData.likeCount}
    </LikeButton>
  );
};

export default Presenter;
