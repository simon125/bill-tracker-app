import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

// app.use(express.static('client/build'));

console.log(123123);
app.listen(5000, () => 'Server is running...');
