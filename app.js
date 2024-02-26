import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

const router = express.Router();

app.get('/', (req, res) => {
  return res.send('Hello, World!');
});

app.use('/user', router);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});