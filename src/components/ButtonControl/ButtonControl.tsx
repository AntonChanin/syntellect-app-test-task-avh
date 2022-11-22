import buttonsControlStore from '../../stores/buttonsControlStore';
import ButtonsGroup from '../ButtonsGroup';
import { Input } from '../Input/Input';

const ButtonControl = () => {
  const { getControlById } = buttonsControlStore;
  const currentControl = getControlById('');
  const { input, buttons } = currentControl ?? {};

  return (<>{currentControl && input && buttons &&
      <>
        <ButtonsGroup {...buttons?.left ?? []} />
        <Input value={`${input.value}`} onChange={input.onChange} />
        <ButtonsGroup {...buttons?.right ?? []} />
      </>
    }
  </>)
}

export { ButtonControl };