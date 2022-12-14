import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

interface Dependencies {
  repository: SharedExpensesRepository;
}

export const getFriendsUseCase = (dependencies: Dependencies) => {
  const { repository } = dependencies;

  return repository.getFriends();
};
