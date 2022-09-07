import { Balance } from '../domain/balance';
import { Expense } from '../domain/expense';
import { Friend } from '../domain/friends';

export const friendsBalanceService = {
  getBalances,
};

function getBalances(friends: Friend[], expenses: Expense[]): Balance[] {
  const balances: Balance[] = [];

  for (const friend of friends) {
    const balance = getFriendBalance(friend, expenses, friends);
    balances.push({
      friend,
      balance,
    });
  }

  return balances;
}

function getFriendBalance(
  friend: Friend,
  expenses: Expense[],
  friends: Friend[]
) {
  const totalExpensesAmount = expenses.reduce(addExpenses, 0);
  const friendExpenseAmount = expenses.reduce(
    (total, expense) =>
      isOwnExpense(expense, friend) ? total + expense.amount : total,
    0
  );
  const meanAmount = totalExpensesAmount / friends.length;

  return friendExpenseAmount - meanAmount;
}

function isOwnExpense(expense: Expense, friend: Friend) {
  return expense.debtor.name === friend.name;
}

function addExpenses(total: number, expense: Expense) {
  return total + expense.amount;
}
