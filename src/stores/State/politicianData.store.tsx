import React from 'react';
import useGlobalHook from '../globalHook.store';

import * as actions from '../../actions/actions';
import { IPolitician } from '../../common/models/politician.models';

export const initialState = {} as IPolitician;

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
