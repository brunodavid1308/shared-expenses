import { Friend } from './friends';

export interface Debt {
  from: Friend;
  to: Friend;
  amount: number;
}
