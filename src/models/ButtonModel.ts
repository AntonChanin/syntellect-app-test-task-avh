export default class ButtonModel {
  id: string = '';

  title: string = '';

  callback: () => void = () => {};

  constructor(id = '', title = '',  callback = () => {}) {
    this.id = id;
    this.title = title;
    this.callback = callback;
  }
}

