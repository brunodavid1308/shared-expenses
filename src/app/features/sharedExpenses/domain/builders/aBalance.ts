import { Balance } from '../balance';
import { Friend } from '../friends';

export const aBalance = (...options: Partial<Balance>[]): Balance => {
  const defaults: Balance = {
    friend: {
      name: '',
      id: '',
    },
    balance: 0,
  };

  return Object.assign({}, defaults, ...options);
};

export const withFriend = (friend: Friend) => ({ friend });

export const withBalance = (balance: number) => ({ balance });
