import { SharedExpensesRepository } from "../domain/sharedExpensesRepository";

interface Dependencies {
    repository: SharedExpensesRepository;
}

export const getExpensesUseCase = ({ repository }: Dependencies) => {
    return repository.getExpenses();
}
