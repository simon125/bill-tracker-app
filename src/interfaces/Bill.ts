import { Document } from 'mongoose';
import { User } from './User';

export interface SingleExpense extends Document {
  name: string;
  amount: number;
  price: number;
  expenseGroup: string;
}

export interface Bill extends Document {
  user: User['_id'];
  expenseName: string;
  totalPrice: number;
  transactionDate: string;
  paymentMethod: string;
  expenses: SingleExpense[];
}
