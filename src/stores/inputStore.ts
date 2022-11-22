import { makeObservable, observable, action } from 'mobx';

class InputStore {
  value = '';

  constructor() {
    makeObservable(this, {
      value: observable,
      setValue: action.bound,
    })
  }

  setValue(value: string) {
    this.value = value;
  }
}

export default InputStore;