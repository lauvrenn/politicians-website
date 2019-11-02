import React from 'react';
import useGlobalHook from '../globalHook.store';
import { IPolitician } from '../../common/models/politician.models';

const setPoliticianData = (store: any, politician: IPolitician) => {
  store.setState(politician);
};

const actions = {
  setPoliticianData,
};

const initialState: IPolitician = {
  id: '',
  first_name: '',
  last_name: '',
  location: { country: '', state: '' },
  party: '',
  type: '',
  plan: { hasPlan: false },
  pledge: { signed: false },
  acknowledged: false,
  money: { didReceive: false },
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
