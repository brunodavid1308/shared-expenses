import { Friend } from './friends';
import { Id } from './id';

export interface Expense {
  id: Id;
  amount: number;
  description: string;
  date: Date;
  debtor: Friend;
}

