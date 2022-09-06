import { aExpense, withAmount } from '../domain/builders/aExpense';
import { SharedExpensesRepository } from '../domain/sharedExpensesRepository';
import { addExpenseUseCase } from './addExpenseUseCase';

describe('AddExpenseUseCase', () => {
  it('should add an expense', async () => {
    const repository: SharedExpensesRepository = {
      getFriends: jest.fn().mockResolvedValue([]),
      addFriend: jest.fn().mockResolvedValue(null),
      addExpense: jest.fn().mockResolvedValue(null),
      getExpenses: jest.fn().mockResolvedValue([]),
    };
    const newExpense = aExpense(withAmount(100));

    await addExpenseUseCase({ repository }, newExpense);

    expect(repository.addExpense).toHaveBeenCalledTimes(1);
    expect(repository.addExpense).toHaveBeenCalledWith(newExpense);
  });
});
