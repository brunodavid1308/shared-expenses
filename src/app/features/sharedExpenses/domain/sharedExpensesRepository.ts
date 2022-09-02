import { Friend } from './friends';

export interface SharedExpensesRepository {
  getFriends(): Promise<Friend[]>;
}
