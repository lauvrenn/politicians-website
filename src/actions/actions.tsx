import { IPoliticians } from '../common/models/politicians.models';
import { IPolitician } from '../common/models/politician.models';
import useGlobalDataHook from '../../src/stores/State/politicianData.store';

export const setPolitician = (store: any, politician: IPoliticians) => {
  store.setState(politician);
};

export const setPoliticianData = (store: any, politician: IPolitician) => {
  store.setState(politician);
};
