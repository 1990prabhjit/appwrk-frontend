import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../transactions.service';
import {Router} from '@angular/router';
interface Transaction {
  type: number;
  description: string;
  amount: number;
}
@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor(private transactionsService: TransactionsService, private route: Router) { }

  ngOnInit() {
    //
  }

  onAddTransaction(form) {
    if (form.valid) {
      const value: Transaction = form.value;
      this.transactionsService.addTransaction(value).subscribe((res: any) => {
        form.reset();
        this.route.navigate(['']);
      });
    }
  }

  onCancel() {
    this.route.navigate(['']);
  }

}
