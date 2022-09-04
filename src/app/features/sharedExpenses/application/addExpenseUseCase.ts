import { Expense } from "../domain/expense";
import { SharedExpensesRepository } from "../domain/sharedExpensesRepository";

interface Dependencies {
    repository: SharedExpensesRepository;
  }

export const addExpenseUseCase = (dependencies: Dependencies, expense: Expense) => {
    const { repository } = dependencies;
  
    return repository.addExpense(expense);
  }

