import { Friend } from './friends';

export interface Expense {
  id: string;
  amount: number;
  description: string;
  date: Date;
  debtor: Friend;
}

