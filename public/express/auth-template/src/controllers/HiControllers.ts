import { Controller } from '../types/RequestHandler';

export const hi_get: Controller = (_, res) => {
	res.json({
		success: true,
		message: 'Hello world',
	});
};
