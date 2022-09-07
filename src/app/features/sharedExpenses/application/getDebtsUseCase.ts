import { Balance } from '../domain/balance';
import { Debt } from '../domain/debt';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { FriendsBalanceService } from '../domain/friendsBalanceService';

interface Dependencies {
  repository: SharedExpensesRepository;
  friendsBalanceService: FriendsBalanceService;
}

export const getDebtsUseCase = async ({
  repository,
  friendsBalanceService,
}: Dependencies) => {
  const friends = await repository.getFriends();
  const expenses = await repository.getExpenses();
  const balances = friendsBalanceService.getBalances(friends, expenses);

  return calculateFriendsDebts(balances);
};

function calculateFriendsDebts(balances: Balance[]): Debt[] {
  const debts: Debt[] = [];
  let balancesCopy: Balance[] = balances;
  let resolvedFriend = 0;
  while (resolvedFriend < balancesCopy.length) {
    balancesCopy = balancesCopy.sort(sortAscending);

    const fromBalance = balancesCopy[0];
    const toBalance = balancesCopy[balancesCopy.length - 1];
    const amount =
      -fromBalance.balance > toBalance.balance
        ? toBalance.balance
        : -fromBalance.balance;

    if (amount === 0) {
      break;
    }

    fromBalance.balance += amount;
    toBalance.balance -= amount;

    debts.push({
      from: fromBalance.friend,
      to: toBalance.friend,
      amount,
    });

    resolvedFriend += 1;
  }

  return debts;
}

function sortAscending(a: Balance, b: Balance) {
  if (a.balance < b.balance) {
    return -1;
  }

  if (a.balance === b.balance) {
    return 0;
  }

  return 1;
}
