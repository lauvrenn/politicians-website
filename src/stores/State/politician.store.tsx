import React from 'react';
import useGlobalHook from '../globalHook.store';

import * as actions from '../../actions/actions';
import { IPoliticians } from '../../common/models/politicians.models';

export const initialState = {} as IPoliticians;

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
