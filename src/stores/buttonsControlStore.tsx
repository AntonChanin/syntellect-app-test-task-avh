import { action, makeObservable, observable } from 'mobx';
import Button from '../models/ButtonModel';
import { ControlModel } from '../models/ControlsModel';

class buttonsControlStore {
  buttons: Button[] = [];

  controls: ControlModel[] = [];

  constructor(buttons: Button[] = [], controls: ControlModel[] = []) {
    this.buttons = buttons;
    this.controls = controls;

    makeObservable(this, {
      buttons: observable,
      controls: observable,
      getControlById: action.bound,
      list: action.bound,
      filter: action.bound,
      create: action.bound,
      clear: action.bound,
      remove: action.bound,
      update: action.bound,
    });
  }

  getControlById(id: string) {
    return this.controls.find((control) => control.input.id === id);
  }

  list(fn?: (err: any, res: any) => void) {
    return this.buttons; 
  }

  filter(whereFn: (button: string, key: string) => boolean, fn: (err: any, res: any) => void) {
  }

  create(options: any, fn: (err: any, res: any) => void) {
  }

  clear() {
    this.buttons = [];
  }

  remove(id: string, fn: (err: any, res: any) => void) {
  }

  update(id: string, options = {}, fn?: (err: any, res: any) => void) {
  }
}

export default new buttonsControlStore();