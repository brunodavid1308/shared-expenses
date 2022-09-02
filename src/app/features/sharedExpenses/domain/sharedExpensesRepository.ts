import { Friend } from './friends';

export interface SharedExpensesRepository {
  getFriends(): Promise<Friend[]>;
  addFriend(friend: Friend): Promise<void>;
}
