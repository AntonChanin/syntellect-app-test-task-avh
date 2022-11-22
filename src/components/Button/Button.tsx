import React, { FC } from 'react';

type Props = {
  id: string;
  title: string;
  callback(): void;
}

const Button: FC<Props> = ({ id, title, callback }) => (<button key={id} onClick={callback}>{title}</button>);

export default Button;