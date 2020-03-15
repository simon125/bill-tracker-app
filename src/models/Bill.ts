import mongoose, { Schema } from 'mongoose';

const SingleExpense: Schema = new Schema({
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
    expenses: [SingleExpense]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('bills', BillSchema);
