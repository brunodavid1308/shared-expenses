import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { getBalanceUseCase } from './getBalanceUseCase';

describe('GetBalanceUseCase', () => {
  it('should get friends balance', async () => {
    const friendsExamples = [
      {
        id: '1',
        name: 'Friend 1',
      },
      {
        id: '2',
        name: 'Friend 2',
      },
    ];
    const expensesExamples = [
      {
        id: '1',
        debtor: {
          id: '1',
          name: 'Friend 1',
        },
        amount: 100,
        description: 'Expense 1',
        date: new Date(),
      },
    ];
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue(friendsExamples),
      getExpenses: jest.fn().mockResolvedValue(expensesExamples),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
    };

    const friendsBalance = await getBalanceUseCase({ repository });

    expect(friendsBalance).toEqual([
      {
        friend: {
          id: '1',
          name: 'Friend 1',
        },
        balance: 50,
      },
      {
        friend: {
          id: '2',
          name: 'Friend 2',
        },
        balance: -50,
      },
    ]);
  });
});
