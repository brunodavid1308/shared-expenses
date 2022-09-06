import { aExpense, withAmount, withDebtor } from '../domain/builders/aExpense';
import { aFriend, withName } from '../domain/builders/aFriend';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { getExpensesUseCase } from './getExpensesUseCase';

describe('GetExpensesUseCase', () => {
  it('should return expenses', async () => {
    const expensesExample = [
      aExpense(withAmount(100), withDebtor(aFriend(withName('John')))),
      aExpense(withAmount(50), withDebtor(aFriend(withName('Jane')))),
    ];
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue([]),
      getExpenses: jest.fn().mockResolvedValue(expensesExample),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
    };

    const expenses = await getExpensesUseCase({ repository });

    expect(expenses).toEqual(expensesExample);
  });
});
