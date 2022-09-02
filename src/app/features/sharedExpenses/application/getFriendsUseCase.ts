import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

interface Dependencies {
  repository: SharedExpensesRepository;
}

export const getFriendsUseCase = () => {
  const { repository } = initialDependencies;

  return {
    execute: repository.getFriends,
    build: (dependencies: Dependencies) =>
      Object.assign(initialDependencies, dependencies),
  };
};

const initialDependencies: Dependencies = {
  repository: {
    getFriends: () => {
      throw new Error('getFriends not implemented');
    },
  },
};
