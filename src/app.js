"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// app.get('/', (req, res) => {
//   res.send('Hello');
// });
app.use(express_1.default.static('client/build'));
app.listen(5000, function () { return 'Server is running...'; });
