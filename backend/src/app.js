import express from 'express';
import cors from 'cors';
import router from './routers/routesIndex.js';
import chalk from 'chalk';


const app = express();

app.use(express.json());
app.use(cors())
app.use(router);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(chalk.green(`Rodando em http://localhost:${PORT}`));
});
