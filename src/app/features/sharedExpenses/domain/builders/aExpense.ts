import { Expense } from '../expense';
import { Friend } from '../friends';

export const aExpense = (...options: Partial<Expense>[]): Expense => {
  const defaults: Expense = {
    id: 'irrelevantId',
    amount: 0,
    description: 'irrelevantDescription',
    date: new Date(),
    debtor: {
      id: 'irrelevantId',
      name: 'irrelevantName',
    },
  };

  return Object.assign({}, defaults, ...options);
};

export const withAmount = (amount: number) => ({ amount });

export const withDebtor = (debtor: Friend) => ({ debtor});