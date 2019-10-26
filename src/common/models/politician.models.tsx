import { IMoney } from './money.models';
import { IPledge } from './pledge.models';
import { IPlan } from './plan.models';
import { ILocation } from './location.models';

export interface IPolitician {
  id: string;
  first_name: string;
  last_name: string;
  location: ILocation;
  party: string;
  type: string;
  plan: IPlan;
  pledge: IPledge;
  acknowledged: boolean;
  money: IMoney;
}
