import express, { NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(json());

const port = 3000;

app.use('/todos', todoRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
  res.status(500).json({message: err.message})
})

app.listen(3000);