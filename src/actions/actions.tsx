import { IPolitician } from '../common/models/politician.models';

export const setPolitician = (store: any, politician: IPolitician) => {
  store.setState(politician);
};
