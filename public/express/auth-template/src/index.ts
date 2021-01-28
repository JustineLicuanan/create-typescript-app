import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import { createConnection, getConnectionOptions } from 'typeorm';

import AuthRoutes from './routes/AuthRoutes';
import HiRoutes from './routes/HiRoutes';

(async () => {
	const {
		NODE_ENV = 'development',
		PORT = '4000',
		SESSION_SECRET = 'aslkdfjoiq12312',
	} = process.env;
	const app = express();

	const options = await getConnectionOptions(NODE_ENV);
	await createConnection({ ...options, name: 'default' });

	app.listen(PORT, () =>
		console.log(`Server started at http://localhost:${PORT}`)
	);

	// Middlewares
	app.use(express.json());
	app.use(
		session({
			name: 'qid',
			secret: SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			cookie: {
				httpOnly: true,
				secure: NODE_ENV === 'production',
				maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
			},
		})
	);

	// Routes
	app.use('/users', AuthRoutes);
	app.use('/hi', HiRoutes);
})();
