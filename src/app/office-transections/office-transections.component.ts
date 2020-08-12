import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../transactions.service';

interface Transaction {
  id: number;
  date: string;
  description: string;
  credit: number;
  debit: number;
  balance: number;
}

@Component({
  selector: 'app-office-transections',
  templateUrl: './office-transections.component.html',
  styleUrls: ['./office-transections.component.css']
})
export class OfficeTransectionsComponent implements OnInit {
  transactions: Transaction[] = [];
  isLoading = false;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.transactionsService.fetchTransactions().subscribe((res: any) => {
      this.isLoading = false;
      this.transactions = res.data;
    });
  }

}
