import { Component, OnInit } from '@angular/core';
import { getFriendsUseCase } from '../../application';
import { Friend } from '../../domain/friends';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expensesList.component.html',
  styleUrls: ['./expensesList.component.css'],
})
export class ExpensesListComponent implements OnInit {
  public friends: Friend[] = [];

  constructor() {}

  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad() {
    this.friends = await getFriendsUseCase().execute();
  }
}
