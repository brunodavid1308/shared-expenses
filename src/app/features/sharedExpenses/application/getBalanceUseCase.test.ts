import { aBalance, withBalance, withFriend } from '../domain/builders/aBalance';
import { aExpense, withAmount, withDebtor } from '../domain/builders/aExpense';
import { aFriend, withName } from '../domain/builders/aFriend';
import { FriendsBalanceService } from '../domain/friendsBalanceService';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { getBalanceUseCase } from './getBalanceUseCase';

describe('GetBalanceUseCase', () => {
  it('should get friends balance', async () => {
    const friendsExamples = [
      aFriend(withName('Pedro')),
      aFriend(withName('Jesus')),
      aFriend(withName('Maria')),
    ];
    const expensesExamples = [
      aExpense(withAmount(10), withDebtor(friendsExamples[0])),
    ];
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue(friendsExamples),
      getExpenses: jest.fn().mockResolvedValue(expensesExamples),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
    };
    const friendsBalanceService: FriendsBalanceService = {
      getBalances: jest
        .fn()
        .mockResolvedValue([
          aBalance(withFriend(aFriend(withName('Pedro'))), withBalance(50)),
          aBalance(withFriend(aFriend(withName('Jesus'))), withBalance(0)),
          aBalance(withFriend(aFriend(withName('Maria'))), withBalance(-50)),
        ]),
    };

    const friendsBalance = await getBalanceUseCase({
      repository,
      friendsBalanceService,
    });

    expect(friendsBalanceService.getBalances).toHaveBeenCalledWith(
      friendsExamples,
      expensesExamples
    );
    expect(friendsBalance).toEqual([
      aBalance(withFriend(aFriend(withName('Pedro'))), withBalance(50)),
      aBalance(withFriend(aFriend(withName('Jesus'))), withBalance(0)),
      aBalance(withFriend(aFriend(withName('Maria'))), withBalance(-50)),
    ]);
  });
});
