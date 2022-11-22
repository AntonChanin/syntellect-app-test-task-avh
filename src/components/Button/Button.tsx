import React, { FC } from 'react';

type Props = {
  id: string;
  title: string;
  callback?(): void;
}

const Button: FC<Props> = ({ id, title, callback }) => {
  const handleButtonClick:  React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    callback?.()
  }
  return (<button key={id} onClick={handleButtonClick}>{title}</button>)
};

export default Button;