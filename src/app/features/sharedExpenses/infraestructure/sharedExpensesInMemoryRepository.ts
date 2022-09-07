import { Expense } from '../domain/expense';
import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

export function sharedExpensesInMemoryRepository(): SharedExpensesRepository {
  const friends: Friend[] = [];
  const expenses: Expense[] = [];

  function getFriends(): Promise<Friend[]> {
    return Promise.resolve(friends);
  }

  function addFriend(friend: Friend): Promise<void> {
    friends.push(friend);
    return Promise.resolve();
  }

  function addExpense(expense: Expense): Promise<void> {
    expenses.push(expense);
    return Promise.resolve();
  }

  function getExpenses(): Promise<Expense[]> {
    return Promise.resolve(expenses);
  }

  return {
    getFriends,
    addFriend,
    addExpense,
    getExpenses,
  };
}
