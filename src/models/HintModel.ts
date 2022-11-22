export default class HintModel {
  name = '';
  fullName = '';
  flag =  '';

  constructor(name = '', fullName = '', flag = '') {
    this.name = name;
    this.fullName = fullName;
    this.flag = flag;
  }
}
