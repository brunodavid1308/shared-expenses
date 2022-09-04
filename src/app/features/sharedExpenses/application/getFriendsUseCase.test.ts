import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { getFriendsUseCase } from './getFriendsUseCase';

describe('GetFriendsUseCase', () => {
  it('should get friends', async () => {
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
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue(friendsExamples),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
      getExpenses: jest.fn().mockResolvedValue([]),
    };

    const friends = await getFriendsUseCase({ repository });

    expect(friends).toEqual(friendsExamples);
  });
});
