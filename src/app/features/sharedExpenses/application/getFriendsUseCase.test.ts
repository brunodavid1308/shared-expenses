import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { getFriendsUseCase } from './getFriendsUseCase';

describe('GetFriendsUseCase', () => {
  it('should get friends', async () => {
    setup();

    const friends = await getFriendsUseCase().execute();

    expect(friends).toEqual([
      {
        id: '1',
        name: 'Friend 1',
      },
      {
        id: '2',
        name: 'Friend 2',
      },
    ]);
  });
});

function setup() {
  const repository: SharedExpensesRepository = {
    getFriends: jest.fn().mockResolvedValue([
      {
        id: '1',
        name: 'Friend 1',
      },
      {
        id: '2',
        name: 'Friend 2',
      },
    ]),
  };

  const { build } = getFriendsUseCase();
  build({ repository });
}
