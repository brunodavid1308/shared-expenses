import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { addFriendUseCase } from './addFriendsUseCase';
import { getFriendsUseCase } from './getFriendsUseCase';

interface Dependencies {
  repository: SharedExpensesRepository;
}

export const sharedExpensesService = {
  addFriendUseCase: (friend: Friend) =>
    addFriendUseCase({ repository: initialDependencies.repository }, friend),
  getFriendsUseCase: () =>
    getFriendsUseCase({
      repository: initialDependencies.repository,
    }),
  build: (dependencies: Dependencies) =>
    Object.assign(initialDependencies, dependencies),
};

const initialDependencies: Dependencies = {
  repository: {
    addFriend: () => {
      throw new Error('addFriend not implemented');
    },
    getFriends: () => {
      throw new Error('getFriends not implemented');
    },
  },
};
