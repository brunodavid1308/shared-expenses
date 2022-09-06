import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesListComponent } from './features/sharedExpenses/delivery/expensesList/expensesList.component';

const routes: Routes = [
  { path: '', redirectTo: 'share-expenses', pathMatch: 'full' },
  { path: 'share-expenses', component: ExpensesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
