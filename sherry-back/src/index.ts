import express from 'express';
import users from './routes/users';
import cost from './routes/cost';
import clas from './routes/clas';

const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!' + new Date().toLocaleString());
    res.send('pong');
});

app.use('/usuarios', users);
app.use('/tarifas', cost);
app.use('/clases', clas);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});