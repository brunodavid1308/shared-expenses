import { friendsBalanceService } from './friendsBalanceService';

describe('FriendsBalanceService', () => {
  it("should return friends' balances", () => {
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

    const friendsBalance = friendsBalanceService.getBalances(
      friendsExamples,
      expensesExamples
    );

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
