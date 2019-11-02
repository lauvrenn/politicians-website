import React from 'react';
import useGlobalHook from '../globalHook.store';

import { IPoliticians } from '../../common/models/politicians.models';

const setPolitician = (store: any, politician: IPoliticians) => {
  store.setState(politician);
};

const actions = {
  setPolitician,
};

export const initialState = {} as IPoliticians;

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
