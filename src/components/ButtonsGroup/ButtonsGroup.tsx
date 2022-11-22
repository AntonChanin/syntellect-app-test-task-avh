import ButtonModel from '../../models/ButtonModel';
import Button from '../Button';

const ButtonsGroup = (buttons: ButtonModel[]) => (
  <>
    {buttons.map((button) => {
      return (<Button {...button} />)
    })}
  </>
);

export { ButtonsGroup };