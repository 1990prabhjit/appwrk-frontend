import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  fetchTransactions() {
    return this.httpClient.get('http://localhost:8000/api/transactions');
  }

  addTransaction(data) {
    return this.httpClient.post('http://localhost:8000/api/add-transaction', data);
  }
}
