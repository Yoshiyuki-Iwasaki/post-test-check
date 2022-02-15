import { useLike } from './hooks';
import Presenter from './presenter';

const Like = () => {
  const { count, liked, handleLike } = useLike();

  return <Presenter count={count} liked={liked} handleLike={handleLike} />;
};

export default Like;
