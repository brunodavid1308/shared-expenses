import { aBalance, withBalance, withFriend } from '../domain/builders/aBalance';
import { aDebt, withAmount, withFrom, withTo } from '../domain/builders/aDebt';
import { aFriend, withName } from '../domain/builders/aFriend';
import { FriendsBalanceService } from '../domain/friendsBalanceService';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { getDebtsUseCase } from './getDebtsUseCase';

describe('GetDebtsUseCase', () => {
  it('should return friends debts', async () => {
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue([]),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
      getExpenses: jest.fn().mockResolvedValue([]),
    };
    const friendsBalanceService: FriendsBalanceService = {
      getBalances: jest
        .fn()
        .mockReturnValue([
          aBalance(withFriend(aFriend(withName('Pedro'))), withBalance(50)),
          aBalance(withFriend(aFriend(withName('Jesus'))), withBalance(0)),
          aBalance(withFriend(aFriend(withName('Maria'))), withBalance(-50)),
        ]),
    };

    const debts = await getDebtsUseCase({ repository, friendsBalanceService });

    expect(debts).toEqual([
      aDebt(
        withFrom(aFriend(withName('Maria'))),
        withTo(aFriend(withName('Pedro'))),
        withAmount(50)
      ),
    ]);
  });
});
