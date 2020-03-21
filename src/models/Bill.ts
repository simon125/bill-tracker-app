import mongoose, { Schema } from 'mongoose';
import { Bill } from '../interfaces/Bill';

const SingleExpenseSchema: Schema = new Schema({
  name: String,
  amount: Number,
  price: Number,
  paymentMethod: String,
  expenseGroup: String
});

const BillSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    expenseName: {
      type: String,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    transactionDate: {
      type: Date,
      required: true
    },
    paymentMethod: {
      type: String,
      required: false
    },
    expenses: [SingleExpenseSchema]
  },
  {
    timestamps: true
  }
);

export default mongoose.model<Bill>('bills', BillSchema);
