require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Insightify API is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
