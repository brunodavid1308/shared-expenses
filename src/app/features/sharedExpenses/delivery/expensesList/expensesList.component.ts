import { Component, OnInit } from '@angular/core';
import { Friend } from '../../domain/friends';
import { FormControl } from '@angular/forms';
import { sharedExpensesService } from '../../application';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expensesList.component.html',
  styleUrls: ['./expensesList.component.css'],
})
export class ExpensesListComponent implements OnInit {
  public friends: Friend[] = [];
  public name = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad() {
    this.friends = await sharedExpensesService.getFriendsUseCase();
  }

  onAddFriend() {
    const name = this.name.value;
    if (!name) {
      return;
    }

    this.name.setValue('');
    sharedExpensesService.addFriendUseCase({ name, id: '1' });
  }
}
