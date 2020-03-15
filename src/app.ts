import express from 'express';

const app: express.Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('client/build'));

app.get('/test', (req, res) => {
  res.status(200).json({ msg: 'You did it!' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
