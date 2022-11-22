import { action, makeObservable, observable } from 'mobx';

import { getCountryByName } from '../api/apiService';
import { AutocompliteControlModel } from '../models/AutocompliteControlModel';
import getControlsService from './getControls.service';

class AutocompliteStore {
  model: Record<string, AutocompliteControlModel> = {};

  constructor() {
    makeObservable( this, {
      model: observable,
      getHints: action.bound,
      initStore: action.bound,
    });
  }

  initStore() {
    const request = async () => {
      this.model = await getControlsService.getAutocompliteConstrolsService();
      console.log(this.model);
    };
    request();
  }

  async getHints(value: string) {
    const result = await getCountryByName(value);
    return result;
  }
};

export default AutocompliteStore;