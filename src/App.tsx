import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

import './App.css';
import ButtonControl from './components/ButtonControl';
import { ControlModel } from './models/ControlModel';
import buttonsControlStore from './stores/buttonsControlStore';

function App() {
  const [currentControls, setCurrentControls] = useState<ControlModel[]>([]);
  useEffect(() => {   
    const { initStore, controls } = buttonsControlStore;
    initStore();
    setCurrentControls(controls);
  }, []);

  return <div>
    {currentControls.map((control) => <ButtonControl key={`key-${control.input.id}`} {...{ id: control.input.id}} />)}
  </div>;
}

export default observer(App);
