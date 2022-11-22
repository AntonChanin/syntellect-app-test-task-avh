import { action, makeObservable, observable } from 'mobx';

import { ButtonControlModel } from '../models/ButtonControlModel';
import getControlsService from './getControls.service';

class ButtonsControlStore {
  controls: ButtonControlModel[] = [];

  constructor(controls: ButtonControlModel[] = []) {
    this.controls = controls;

    makeObservable(this, {
      controls: observable,
      getControlById: action.bound,
      initStore: action.bound,
    });
  }

  initStore() {
    this.controls = getControlsService.getButtonConstrolsService();
  }

  getControlById(id: string) {
    return this.controls.find((control) =>  control.input.id === id);
  }
}

export default new ButtonsControlStore();