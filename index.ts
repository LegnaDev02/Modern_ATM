import express, { type Request, type Response } from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/saludo', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});