import express from 'express';
const app = express();
app.use(express.json());

let PORT = 3000;

app.get('/hi', (req, res) => {
    res.send('hi');
})
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));
