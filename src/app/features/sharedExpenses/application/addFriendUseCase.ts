import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

interface Dependencies {
  repository: SharedExpensesRepository;
}

export const addFriendUseCase = (
  dependencies: Dependencies,
  friend: Friend
) => {
  const { repository } = dependencies;

  return repository.addFriend(friend);
};
