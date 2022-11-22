import InputStore from '../stores/inputStore';

export default class InputModel {
  id: string = '';

  value: string = '';

  onChange?: (context: InputStore) => (value: string) => void;

  constructor(id: string, value = '',  onChange = () => () => {}) {
    this.id = id;
    this.value = value;
    this.onChange = onChange;
  }
}

  