import { Middleware } from '../types/RequestHandler';

export const isAuth: Middleware = (req, res, next) => {
	if (!(req.session as any).user) {
		res.status(400).json({
			errors: [
				{
					location: 'session',
					msg: 'Unauthorized',
					param: 'user',
				},
			],
		});
		return;
	}

	next();
};
