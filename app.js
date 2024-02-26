import express from 'express';
import connect from './schemas/index.js';
import Userrouter from './routes/users.router.js';
const app = express();
const PORT = 3000;

connect();

app.use(express.json());


app.get('/', (req, res) => {
  return res.send('Hello, World!');
});

app.use('/user', Userrouter);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
