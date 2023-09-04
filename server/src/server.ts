import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Serve React static files
app.use(express.static(path.join(__dirname, '../../client/build')));

// Catch-all to serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
