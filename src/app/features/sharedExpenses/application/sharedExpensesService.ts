import { Expense } from '../domain/expense';
import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { addExpenseUseCase } from './addExpenseUseCase';
import { addFriendUseCase } from './addFriendsUseCase';
import { getExpensesUseCase } from './getExpensesUseCase';
import { getFriendsUseCase } from './getFriendsUseCase';

interface Dependencies {
  repository: SharedExpensesRepository;
}

export const sharedExpensesService = {
  addFriendUseCase: (friend: Friend) =>
    addFriendUseCase({ repository: initialDependencies.repository }, friend),
  getFriendsUseCase: () =>
    getFriendsUseCase({
      repository: initialDependencies.repository,
    }),
  addExpenseUseCase: (expense: Expense) =>
    addExpenseUseCase({ repository: initialDependencies.repository }, expense),
  getExpensesUseCase: () => getExpensesUseCase({ repository: initialDependencies.repository }),
  build: (dependencies: Dependencies) =>
    Object.assign(initialDependencies, dependencies),
};

const initialDependencies: Dependencies = {
  repository: {
    addFriend: () => {
      throw new Error('addFriend not implemented');
    },
    getFriends: () => {
      throw new Error('getFriends not implemented');
    },
    addExpense: () => {
      throw new Error('addExpense not implemented');
    },
    getExpenses: () => {
      throw new Error('getExpenses not implemented');
    },
  },
};
