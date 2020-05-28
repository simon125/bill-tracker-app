"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// node modules
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
// local modules
var users_1 = __importDefault(require("./routes/users"));
var bills_1 = __importDefault(require("./routes/bills"));
var auth_1 = __importDefault(require("./routes/auth"));
var db_1 = require("../config/db");
var app = express_1.default();
var PORT = process.env.PORT || 5000;
db_1.connectDB();
app.use(body_parser_1.default.json());
app.use('/api/v1/users', users_1.default);
app.use('/api/v1/bills', bills_1.default);
app.use('/api/v1/auth', auth_1.default);
app.use(express_1.default.static('client/build'));
app.listen(PORT, function () { return console.log("Server is running on port " + PORT + "..."); });
