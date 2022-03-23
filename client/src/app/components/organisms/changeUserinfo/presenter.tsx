import { FC } from 'react';
import { Form, Title, FormInput, SubmitButton } from './style';

const Presenter: FC<any> = ({
  handleSubmit,
  handleEditUserinfo,
  selectedUser,
  register,
}) => {
  return (
    <Form onSubmit={handleSubmit(handleEditUserinfo)}>
      <Title>ユーザー名</Title>
      <FormInput
        type="text"
        data-testid="input"
        defaultValue={selectedUser[0].username}
        {...register('username', { required: true })}
      />
      <Title>ディスクリプション</Title>
      <FormInput
        type="text"
        data-testid="input"
        defaultValue={selectedUser[0].description}
        {...register('description', { required: true })}
      />
      <SubmitButton
        type="submit"
        value="編集"
        onClick={handleSubmit(handleEditUserinfo)}
      />
    </Form>
  );
};

export default Presenter;
