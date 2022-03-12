import { LikeButton } from './styles';
import { useDispatch } from 'react-redux';
import { likeTask } from '../../../features/task/taskSlice';

const Presenter = ({ postData }: any) => {
  const dispatch = useDispatch();
  return (
    <LikeButton
      likedFlag={postData.likeState}
      data-testid="like"
      onClick={() => dispatch(likeTask(postData))}
    >
      {postData.likeCount}
    </LikeButton>
  );
};

export default Presenter;
