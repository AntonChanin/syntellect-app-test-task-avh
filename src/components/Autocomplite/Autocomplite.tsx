import React, { FC, useEffect, useState }from 'react';
import { CountryInfo } from '../../api/apiService';
import AutocompliteStore from '../../stores/autocompliteStote';

type Props = {
  id: string;
  value: string;
  maxHint: number;
  onChange?(value: string): void;
}

const Autocomplite: FC<Props> = (({ id, value, maxHint, onChange }) => {
  const [options, setOptions] = useState<CountryInfo[]>([]);
  useEffect(() => {
    async function getResponse() {
      setOptions(await new AutocompliteStore().getHints(value));
    };
    getResponse();
  }, [value]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { target: { value: targetValue } } = event;
    event.preventDefault();
    onChange?.(targetValue);
  } 

  return (<select id={id} onChange={handleChange}>{
    options.filter((_, index) => index <= maxHint).map(({ name, fullName, flag }) => (<option>
      <span>{name}</span>{' | '}
      <span>{fullName}</span>
      <img alt='' src={flag}/>
    </option>))
  }</select>)
})

export { Autocomplite };