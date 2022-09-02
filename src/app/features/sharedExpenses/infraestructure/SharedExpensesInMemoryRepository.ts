import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

export function sharedExpensesInMemoryRepository(): SharedExpensesRepository {
  const friends: Friend[] = [];

  function getFriends(): Promise<Friend[]> {
    return Promise.resolve(friends);
  }

  return {
    getFriends,
  };
}
