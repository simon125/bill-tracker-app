import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users';
import billsRoute from './routes/bills';
import { connectDB } from '../config/db';

const app: express.Application = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/bills', billsRoute);

app.use(express.static('client/build'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
