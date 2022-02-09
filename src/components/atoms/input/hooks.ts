import { useState } from 'react';

export const useForm = ({ postData, setPostData }: any) => {
  const [text, setText] = useState<string>('');

  const handleInput = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    setPostData([
      ...postData,
      {
        id: postData.length + 1,
        username: `username${postData.length + 1}`,
        date: 'date',
        content: text,
      },
    ]);
    setText('');
  };
  return { text, handleInput, handleSubmit };
};
