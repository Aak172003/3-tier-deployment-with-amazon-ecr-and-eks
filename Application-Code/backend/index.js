import cors from 'cors'
import express from 'express'
const app = express();
import 'dotenv/config'
import { connection } from './db.js';
import tasks from './routes/tasks.js';

connection();

app.use(express.json());
app.use(cors());

app.get('/ok', (req, res) => {
  res.status(200).send('ok')
})

app.use("/api/tasks", tasks);

const port = process.env.PORT;
console.log("port :::::: ", port)
app.listen(port, () => console.log(`Listening on port ${port}...`));
