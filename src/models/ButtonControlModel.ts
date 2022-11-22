import ButtonModel from './ButtonModel';
import InputModel from './InputModel';

class ButtonControlModel {
  input: InputModel;
  buttons: Record<'left' | 'right', ButtonModel[]>;

  constructor(input: InputModel, buttons: Record<'left' | 'right', ButtonModel[]> = { right: [], left: [] }) {
    this.input = input;
    this.buttons = buttons;
  }
}

export { ButtonControlModel };