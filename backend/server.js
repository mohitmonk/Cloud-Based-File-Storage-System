require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// const authMiddleware = require('./middleware/authMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
app.post('/api/upload', authMiddleware, (req, res) => {
    // File upload logic here
});

const uploadRoutes = require('./routes/upload');
app.use('/api/upload', authMiddleware, uploadRoutes);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

