import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { addFriendUseCase } from './addFriendsUseCase';

describe('AddFriendsUseCase', () => {
  it('should add a friend to the group of friends', async () => {
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
    };
    const newFriend = {
      id: '3',
      name: 'Friend 3',
    };

    await addFriendUseCase({ repository }, newFriend);

    expect(repository.addFriend).toHaveBeenCalledTimes(1);
    expect(repository.addFriend).toHaveBeenCalledWith(newFriend);
  });
});
