import { ControlModel } from '../models/ControlModel';

class ConstrolsService {

  getConstrolsService = (): ControlModel[] => {
    return [{
      input: {
        id: '1',
        value: '',
        onChange: (ctx) => (value) => { ctx.setValue(value); },
      },
      buttons: {
        left: [],
        right: [
          {
            id: 'button_1',
            title:'очищается содерживое в контроле',
            callback: (ctx) => () => {
              ctx.setValue('');
            },
          },
          {
            id: 'button_2',
            title:'Hello world!',
            callback: (ctx) => () => { ctx.setValue('Hello world!') },
          }
      ],
      }
    },
    {
      input: {
        id: '2',
        value: '',
        onChange: (ctx) => (value) => { ctx.setValue(value); },
      },
      buttons: {
        left: [{
          id: 'button_3',
          title: 'alert с текстом в контроле',
          callback: (ctx) => () => { alert(ctx.value) },
        }],
        right: [{
          id: 'button_4',
          title: 'alert с числом',
          callback: (ctx) => () => { 
           (!!Number(ctx.value) || Number(ctx.value) === 0) &&  alert(ctx.value);
          },
        }],
      }
    }];
  }
}

export default new ConstrolsService();