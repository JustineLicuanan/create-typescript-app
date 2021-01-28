import { validationResult } from 'express-validator';

import { Middleware } from '../types/RequestHandler';

export const errorHandler: Middleware = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() });
		return;
	}

	next();
};
