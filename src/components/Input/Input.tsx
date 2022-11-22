import React, { FC } from 'react';

type Props = {
  value: string;
  onChange(): void;
}

const Input: FC<Props> = ({value, onChange }) => {
  return (<input value={value} onChange={onChange} />)
}

export { Input };