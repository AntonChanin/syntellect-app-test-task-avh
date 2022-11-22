import { observer } from 'mobx-react';
import { FC, useEffect, useState } from 'react';

import AutocompliteStore from '../../stores/autocompliteStote';
import InputStore from '../../stores/inputStore';
import { Autocomplite } from '../Autocomplite/Autocomplite';
import { Input } from '../Input/Input';

type Props = {
  id: string;
}

const AutocompliteControl: FC<Props> = observer(({ id }) => {
  const [autocompliteStore, setAutocompliteStore] = useState<AutocompliteStore>();
  useEffect(() => {
    setAutocompliteStore(new AutocompliteStore());
  }, []);
  
  const { model } = autocompliteStore ?? {};
  const { input, maxHint = 3 } = model?.[id] ?? {};
  const { onChange } = input ?? {};

  const [inputStore, setInputStore] = useState<InputStore>();
  useEffect(() => {
    setInputStore(new InputStore());
  }, []);

  return (
    <>{inputStore &&
      <div>
        {input && <Input id={input.id} value={inputStore.value} onChange={onChange && onChange(inputStore)} />}
        {autocompliteStore && <Autocomplite maxHint={maxHint} value={inputStore.value} id={id} onChange={onChange && onChange(inputStore)} />}
      </div>
    }
    </>
  )
})

export default AutocompliteControl;