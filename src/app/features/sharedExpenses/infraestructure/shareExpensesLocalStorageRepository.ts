import { Expense } from '../domain/expense';
import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

export function sharedExpensesLocalStorageRepository(): SharedExpensesRepository {
  const expensesStorageKey = 'expenses';
  const friendsStorageKey = 'friends';

  function getFriends(): Promise<Friend[]> {
    const friends = localStorage.getItem(friendsStorageKey);
    if (!friends) {
      return Promise.resolve([]);
    }
    return Promise.resolve(JSON.parse(friends));
  }

  function addFriend(friend: Friend): Promise<void> {
    const friends = localStorage.getItem(friendsStorageKey);
    if (!friends) {
      localStorage.setItem(friendsStorageKey, JSON.stringify([friend]));
      return Promise.resolve();
    }
    const parsedFriends = JSON.parse(friends);
    parsedFriends.push(friend);
    localStorage.setItem(friendsStorageKey, JSON.stringify(parsedFriends));
    return Promise.resolve();
  }

  function getExpenses(): Promise<Expense[]> {
    const expenses = localStorage.getItem(expensesStorageKey);
    if (!expenses) {
      return Promise.resolve([]);
    }
    return Promise.resolve(JSON.parse(expenses));
  }

  function addExpense(expense: Expense): Promise<void> {
    const expenses = localStorage.getItem(expensesStorageKey);
    if (!expenses) {
      localStorage.setItem(expensesStorageKey, JSON.stringify([expense]));
      return Promise.resolve();
    }
    const parsedExpenses = JSON.parse(expenses);
    parsedExpenses.push(expense);
    localStorage.setItem(expensesStorageKey, JSON.stringify(parsedExpenses));
    return Promise.resolve();
  }

  return {
    getFriends,
    addFriend,
    addExpense,
    getExpenses,
  };
}
