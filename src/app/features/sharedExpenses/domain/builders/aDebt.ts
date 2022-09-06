import { Debt } from '../debt';
import { Friend } from '../friends';

export const aDebt = (...options: Partial<Debt>[]): Debt => {
  const defaults: Debt = {
    from: {
      name: '',
      id: '',
    },
    to: {
      name: '',
      id: '',
    },
    amount: 0,
  };

  return Object.assign({}, defaults, ...options);
};

export const withFrom = (from: Friend) => ({ from });

export const withTo = (to: Friend) => ({ to });

export const withAmount = (amount: number) => ({ amount });
