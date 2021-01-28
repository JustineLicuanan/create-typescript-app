import 'reflect-metadata';
import express from 'express';
import { createConnection, getConnectionOptions } from 'typeorm';

import HiRoutes from './routes/HiRoutes';

(async () => {
	const { NODE_ENV = 'development', PORT = '4000' } = process.env;
	const app = express();

	const options = await getConnectionOptions(NODE_ENV);
	await createConnection({ ...options, name: 'default' });

	app.listen(PORT, () =>
		console.log(`Server started at http://localhost:${PORT}`)
	);

	// Middlewares
	app.use(express.json());

	// Routes
	app.use('/hi', HiRoutes);
})();
