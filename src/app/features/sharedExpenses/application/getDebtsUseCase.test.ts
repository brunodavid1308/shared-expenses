import { aBalance, withBalance, withFriend } from '../domain/builders/aBalance';
import { aDebt, withAmount, withFrom, withTo } from '../domain/builders/aDebt';
import { aFriend, withName } from '../domain/builders/aFriend';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import * as getBalanceUseCaseService from './getBalanceUseCase';
import { getDebtsUseCase } from './getDebtsUseCase';

jest.mock('./getBalanceUseCase');

describe('GetDebtsUseCase', () => {
  it('should return friends debts', async () => {
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue([]),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
      getExpenses: jest.fn().mockResolvedValue([]),
    };
    jest
      .spyOn(getBalanceUseCaseService, 'getBalanceUseCase')
      .mockResolvedValue([
        aBalance(withFriend(aFriend(withName('Pedro'))), withBalance(50)),
        aBalance(withFriend(aFriend(withName('Jesus'))), withBalance(0)),
        aBalance(withFriend(aFriend(withName('Maria'))), withBalance(-50)),
      ]);

    const debts = await getDebtsUseCase({ repository });

    expect(debts).toEqual([
      aDebt(
        withFrom(aFriend(withName('Maria'))),
        withTo(aFriend(withName('Pedro'))),
        withAmount(50)
      ),
    ]);
  });
});
