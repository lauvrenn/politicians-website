import { IPolitician } from './politician.models';

export interface IPoliticians extends IPolitician {
  id: string;
  first_name: string;
  last_name: string;
}
