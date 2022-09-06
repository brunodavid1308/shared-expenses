import { aFriend, withId, withName } from '../domain/builders/aFriend';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { addFriendUseCase } from './addFriendsUseCase';

describe('AddFriendsUseCase', () => {
  it('should add a friend to the group of friends', async () => {
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue([]),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
      getExpenses: jest.fn().mockResolvedValue([]),
    };
    const newFriend = aFriend(withId('1'), withName('Pedro'));

    await addFriendUseCase({ repository }, newFriend);

    expect(repository.addFriend).toHaveBeenCalledTimes(1);
    expect(repository.addFriend).toHaveBeenCalledWith(newFriend);
  });
});
