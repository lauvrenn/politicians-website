import React from 'react';
import useGlobalHook from '../globalHook.store';

import * as actions from '../../actions/actions';

export const initialState = {
  id: null,
  first_name: null,
  last_name: null,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
