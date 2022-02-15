import Like from '../../atoms/like';
import React from 'react';
import Presenter from './presenter';

const PostItem: React.FC<any> = ({ data, postData, setPostData }) => {
  const handleRemove = () => {
    const result = window.confirm('本当にこの投稿を削除しますか。');
    if (result) {
      const fixedData = [...postData];
      fixedData.splice(data.id, 1);
      setPostData(fixedData);
    }
  };
  return <Presenter data={data} handleRemove={handleRemove} />;
};

export default PostItem;
