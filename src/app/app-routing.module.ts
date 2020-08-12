import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeTransectionsComponent} from './office-transections/office-transections.component';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';


const routes: Routes = [
  {path: '', component: OfficeTransectionsComponent},
  {path: 'add-transaction', component: AddTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
