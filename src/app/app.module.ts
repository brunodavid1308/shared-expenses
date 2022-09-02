import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getFriendsUseCase } from './features/sharedExpenses/application';
import { ExpensesListComponent } from './features/sharedExpenses/delivery/expensesList/expensesList.component';
import { sharedExpensesInMemoryRepository } from './features/sharedExpenses/infraestructure/SharedExpensesInMemoryRepository';

@NgModule({
  declarations: [AppComponent, ExpensesListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const { build } = getFriendsUseCase();
    build({ repository: sharedExpensesInMemoryRepository() });
  }
}
