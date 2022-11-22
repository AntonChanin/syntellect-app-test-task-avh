import HintModel from './HintModel';
import InputModel from './InputModel';

class AutocompliteControlModel {
  input: InputModel;
  hints: HintModel[];
  maxHint = 3;

  constructor(input: InputModel, hints: HintModel[] = []) {
    this.input = input;
    this.hints = hints;
  }
}

export { AutocompliteControlModel };