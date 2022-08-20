import { FC } from 'react';


interface InputProps {
  name: string,
  placeholder: string,
  type: 'text' | 'number' | 'date',
  label?: string,
  id: string
}

export const Input: FC<InputProps> = ({
  name, placeholder, type, label, id,
}) => {
  return (
    <label htmlFor={id}>
      <input
        className="input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {label}
    </label>
  );
};

Input.defaultProps = {
  label: '',
};
