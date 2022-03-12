import { useLike } from './hooks';
import Presenter from './presenter';
import { useDispatch } from 'react-redux';
import { likeTask } from '../../../features/task/taskSlice';

const Like = ({ postData }: any) => {
  const dispatch = useDispatch();

  return (
    <Presenter
      count={postData.likeCount}
      liked={postData.likeState}
      handleLike={() => dispatch(likeTask(postData))}
    />
  );
};

export default Like;
