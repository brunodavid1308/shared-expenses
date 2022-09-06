import { Friend } from '../friends';

export const aFriend = (...options: Partial<Friend>[]) => {
  const defaults: Friend = {
    id: 'irrelevantId',
    name: 'irrelevantName',
  };

  return Object.assign({}, defaults, ...options);
};

export const withName = (name: string) => ({ name });

export const withId = (id: string) => ({ id });
