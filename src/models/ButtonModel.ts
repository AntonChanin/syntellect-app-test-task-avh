import InputStore from '../stores/inputStore';

export default class ButtonModel {
  id: string = '';

  title: string = '';

  callback?: (ctx: InputStore) => () => void;

  constructor(id = '', title = '',  callback = () => () => {}) {
    this.id = id;
    this.title = title;
    this.callback = callback;
  }
}

