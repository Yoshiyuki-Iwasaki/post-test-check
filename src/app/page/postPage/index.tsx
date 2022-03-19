import React from 'react';
import PostItem from '../../components/molecules/postItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectsTasks } from '../../slice/task/selector';
import { likeTask } from '../../slice/task';
import { HeadBlock } from '../../components/organisms/head';

const Post: React.FC = () => {
  const postData = useSelector(selectsTasks);
  const dispatch = useDispatch();
  const handleLike = (data: any) => {
    dispatch(likeTask(data));
  };
  return (
    <>
      <HeadBlock
        title="投稿ページのタイトルです"
        description="投稿ページの説明文です"
        path="post"
      />
      <ul>
        <PostItem
          removeFlag={false}
          postData={postData[0]}
          handleLike={handleLike}
        />
      </ul>
    </>
  );
};

export default Post;
