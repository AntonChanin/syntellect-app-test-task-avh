import React, { FC }from 'react';

type Props = {
  id: string;
  value: string;
  onChange?(value: string): void;
}

const Input: FC<Props> = (({ id, value, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { value: targetValue } } = event;
    event.preventDefault();
    onChange?.(targetValue);
  } 

  return (<input id={id} value={value} onChange={handleChange} />)
})

export { Input };