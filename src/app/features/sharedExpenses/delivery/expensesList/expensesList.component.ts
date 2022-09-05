import { Component, OnInit } from '@angular/core';
import { Friend } from '../../domain/friends';
import { FormControl } from '@angular/forms';
import { sharedExpensesService } from '../../application';
import { Expense } from '../../domain/expense';
import { Balance } from '../../domain/balance';
import { Debt } from '../../domain/debt';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expensesList.component.html',
  styleUrls: ['./expensesList.component.css'],
})
export class ExpensesListComponent implements OnInit {
  friends: Friend[] = [];
  expenses: Expense[] = [];
  balances: Balance[] = [];
  debts: Debt[] = [];
  name = new FormControl('');
  debtor = new FormControl('');
  amount = new FormControl('');
  description = new FormControl('');
  date = new FormControl(new Date());

  constructor() {}

  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad() {
    this.friends = await sharedExpensesService.getFriendsUseCase();
    this.expenses = await sharedExpensesService.getExpensesUseCase();
    this.balances = await sharedExpensesService.getBalanceUseCase();
    this.debts = await sharedExpensesService.getDebtsUseCase();
  }

  onAddFriend() {
    const name = this.name.value;
    if (!name) {
      return;
    }

    this.name.setValue('');
    sharedExpensesService.addFriendUseCase({ name, id: '1' });
    this.updateBalance();
    this.updateDebts();
  }

  onAddExpense() {
    const debtor = this.debtor.value;
    const amount = this.amount.value;
    const description = this.description.value;
    const date = this.date.value;

    if (!debtor || !amount || !description || !date) {
      return;
    }

    this.debtor.setValue('');
    this.amount.setValue('');
    this.description.setValue('');
    this.date.setValue(new Date());

    sharedExpensesService.addExpenseUseCase({
      id: '1',
      debtor: { name: debtor, id: '5' },
      amount: parseInt(amount, 10),
      description,
      date: new Date(date),
    });
    this.updateExpenses();
    this.updateBalance();
    this.updateDebts();
  }

  getExpenses() {
    const sortedDesc = (objA: Expense, objB: Expense) =>
      Number(objB.date) - Number(objA.date);

    this.expenses = this.expenses.sort(sortedDesc);
    return this.expenses;
  }

  async updateBalance() {
    this.balances = await sharedExpensesService.getBalanceUseCase();
  }

  async updateDebts() {
    this.debts = await sharedExpensesService.getDebtsUseCase();
  }

  async updateExpenses() {
    this.expenses = await sharedExpensesService.getExpensesUseCase();
  }
}
