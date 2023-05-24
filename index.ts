import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let PORT = 3000;

const userRoutes:any = import('./src/routes/users');


app.get('/', (req, res) => {
    res.send('hi');
})
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

app.use('/users', userRoutes);