import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesListComponent } from './features/sharedExpenses/delivery/expensesList/expensesList.component';
import { sharedExpensesInMemoryRepository } from './features/sharedExpenses/infraestructure/SharedExpensesInMemoryRepository';
import { ReactiveFormsModule } from '@angular/forms';
import { sharedExpensesService } from './features/sharedExpenses/application/sharedExpensesService';

@NgModule({
  declarations: [AppComponent, ExpensesListComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const repository = sharedExpensesInMemoryRepository();

    sharedExpensesService.build({ repository });
  }
}
