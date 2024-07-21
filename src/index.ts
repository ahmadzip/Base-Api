import express from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import { swaggerUi, specs } from './swagger';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/auth', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});