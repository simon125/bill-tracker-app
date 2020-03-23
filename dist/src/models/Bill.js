"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var SingleExpenseSchema = new mongoose_1.Schema({
    name: String,
    amount: Number,
    price: Number,
    paymentMethod: String,
    expenseGroup: String
});
var BillSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('bills', BillSchema);
