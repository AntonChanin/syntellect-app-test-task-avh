import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

import AutocompliteControl from './components/AutocompliteControl/AutocompliteControl';
import ButtonControl from './components/ButtonControl';
import { ButtonControlModel } from './models/ButtonControlModel';
import buttonsControlStore from './stores/buttonsControlStore';
import './App.css';
import AutocompliteStote from './stores/autocompliteStote';
import { AutocompliteControlModel } from './models/AutocompliteControlModel';

function App() {
  const [currentControls, setCurrentControls] = useState<ButtonControlModel[]>([]);
  const [currentAutocomplite, setCurrentAutocomplite] = useState<Record<string, AutocompliteControlModel>>({});
  useEffect(() => {   
    const { initStore: initStoreButtons, controls } = buttonsControlStore;
    const { initStore: initStoreAutocomplite, model } = new AutocompliteStote();
    initStoreButtons();
    initStoreAutocomplite();
    setCurrentControls(controls);
    setCurrentAutocomplite(model);
  }, []);

  return <div>
    {currentControls.map((control) => <ButtonControl key={`key-${control.input.id}`} {...{ id: control.input.id}} />)}
    {currentAutocomplite?.['first'] && <AutocompliteControl id='first' />}
  </div>;
}

export default observer(App);
