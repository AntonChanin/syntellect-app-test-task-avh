import { action, makeObservable, observable } from 'mobx';

import { ControlModel } from '../models/ControlModel';
import ConstrolsService from './getControls.service';

class ButtonsControlStore {
  controls: ControlModel[] = [];

  constructor(controls: ControlModel[] = []) {
    this.controls = controls;

    makeObservable(this, {
      controls: observable,
      getControlById: action.bound,
      initStore: action.bound,
    });
  }

  initStore() {
    this.controls = ConstrolsService.getConstrolsService();
  }

  getControlById(id: string) {
    return this.controls.find((control) =>  control.input.id === id);
  }
}

export default new ButtonsControlStore();