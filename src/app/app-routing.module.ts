import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesListComponent } from './features/sharedExpenses/delivery/ExpensesList/ExpensesList.component';

const routes: Routes = [
  { path: '', redirectTo: 'expenses-list', pathMatch: 'full' },
  { path: 'expenses-list', component: ExpensesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
