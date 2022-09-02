import { Friend } from '../domain/friends';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';

export function sharedExpensesInMemoryRepository(): SharedExpensesRepository {
  const friends: Friend[] = [];

  function getFriends(): Promise<Friend[]> {
    return Promise.resolve(friends);
  }

  function addFriend(friend: Friend): Promise<void> {
    friends.push(friend);
    return Promise.resolve();
  }

  return {
    getFriends,
    addFriend,
  };
}
