import { useDispatch } from 'react-redux';
import { likeTask } from '../../../features/task/taskSlice';

export const useLike = ({ postData }: any) => {
  const dispatch = useDispatch();
  const handleLikes = () => {
    dispatch(likeTask(postData));
  };
  return { handleLikes };
};
