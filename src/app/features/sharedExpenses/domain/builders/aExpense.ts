import { Expense } from '../expense';

export const aExpense = (...options: Partial<Expense>[]) => {
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
