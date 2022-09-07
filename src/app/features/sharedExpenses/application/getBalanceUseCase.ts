import { Balance } from '../domain/balance';
import { FriendsBalanceService } from '../domain/friendsBalanceService';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

interface Dependencies {
  repository: SharedExpensesRepository;
  friendsBalanceService: FriendsBalanceService;
}

export const getBalanceUseCase = async ({
  repository,
  friendsBalanceService,
}: Dependencies): Promise<Balance[]> => {
  const friends = await repository.getFriends();
  const expenses = await repository.getExpenses();

  return friendsBalanceService.getBalances(friends, expenses);
};
