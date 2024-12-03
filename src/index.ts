import express from 'express';
import bodyParser from 'body-parser';
import whatsappRoutes from './routes/whatsappRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/whatsapp', whatsappRoutes);

// Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
