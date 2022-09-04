import { Expense } from './expense';
import { Friend } from './friends';

export interface SharedExpensesRepository {
  getFriends(): Promise<Friend[]>;
  addFriend(friend: Friend): Promise<void>;
  addExpense(expense: Expense): Promise<void>;
  getExpenses(): Promise<Expense[]>;
}
