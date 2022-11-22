import ButtonModel from './ButtonModel';

class ControlModel {
  input: React.InputHTMLAttributes<HTMLInputElement>;
  buttons: Record<'left' | 'right', ButtonModel[]>;

  constructor(input: React.InputHTMLAttributes<HTMLInputElement>, buttons: Record<'left' | 'right', ButtonModel[]> = { right: [], left: [] }) {
    this.input = input;
    this.buttons = buttons;
  }
}

export { ControlModel };