import { observer } from 'mobx-react';
import { FC, useEffect, useState } from 'react';

import buttonsControlStore from '../../stores/buttonsControlStore';
import InputStore from '../../stores/inputStore';
import ButtonsGroup from '../ButtonsGroup';
import { Input } from '../Input/Input';

type Props = {
  id: string;
}

const ButtonControl: FC<Props> = observer(({ id }) => {
  const { getControlById } = buttonsControlStore;
  const currentControl = getControlById(id);
  const { input, buttons } = currentControl ?? {};
  const { onChange } = input ?? {};
  const { left: leftButtons, right: rightButtons } = buttons ?? {};

  const [inputStore, setInputStore] = useState<InputStore>();
  useEffect(() => {
    setInputStore(new InputStore());
  }, []);

  return (<>{inputStore && currentControl && input && buttons &&
      <div>
        <ButtonsGroup {...{ buttons: leftButtons ?? [], ctx: inputStore }} />
        <Input id={input.id} value={inputStore.value} onChange={onChange && onChange(inputStore)} />
        <ButtonsGroup {...{ buttons: rightButtons ?? [], ctx: inputStore }} />
      </div>
    }
  </>)
})

export default ButtonControl;