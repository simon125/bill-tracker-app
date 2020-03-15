import express from 'express';
import bodyParser from 'body-parser';
import billsRoute from './routes/bills';

const app: express.Application = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/v1/bills', billsRoute);

app.use(express.static('client/build'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
