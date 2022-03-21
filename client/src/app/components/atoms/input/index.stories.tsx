import { withKnobs } from '@storybook/addon-knobs';
import { useForm } from 'react-hook-form';
import Input from '.';

export const BasicInput = () => {
  const { register, handleSubmit, reset } = useForm();

  return <Input register={register} handleSubmit={handleSubmit} />;
};

export default {
  component: Input,
  decorators: [withKnobs],
  title: 'atoms/Input',
};
