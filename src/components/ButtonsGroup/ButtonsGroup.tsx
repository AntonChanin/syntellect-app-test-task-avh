import React, { FC } from 'react';
import ButtonModel from '../../models/ButtonModel';
import InputStore from '../../stores/inputStore';
import Button from '../Button';

type Props = {
  ctx?: InputStore;
  buttons: ButtonModel[];
}

const ButtonsGroup: FC<Props> = (props) => {
  const { buttons, ctx } = props;
  return (
  <>
    {buttons?.map((button) => {
      return (<Button key={`button_${button.id}`} {...button} callback={ctx && button.callback && button.callback(ctx)} />)
    })}
  </>
)
};

export { ButtonsGroup };