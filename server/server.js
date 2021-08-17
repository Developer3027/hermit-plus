import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const port = 5000;

app.listen(port, () => console.log(`server is running on port:${port}`));
