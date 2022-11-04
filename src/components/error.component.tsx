import { FC } from 'react';

const FieldError: FC<{ message: string }> = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default FieldError;
