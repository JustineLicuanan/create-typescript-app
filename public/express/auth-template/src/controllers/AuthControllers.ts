import { compare } from 'bcryptjs';

import { User } from '../entity/User';
import { Controller } from '../types/RequestHandler';

export const register_post: Controller = async (req, res) => {
	try {
		const user = await User.create({
			email: req.body.email,
			password: req.body.password,
		}).save();

		const { password, ...userWithoutPass } = user;
		(req.session as any).user = user;
		res.json({ user: userWithoutPass });
	} catch (err) {
		res.status(500).json({
			errors: [
				{
					location: 'body',
					msg: 'Internal server error',
					param: 'email',
				},
			],
		});
	}
};

export const login_post: Controller = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			res.status(400).json({
				errors: [
					{
						location: 'body',
						msg: 'email is incorrect',
						param: 'email',
					},
				],
			});
			return;
		}

		const isMatch = await compare(req.body.password, user.password);

		if (!isMatch) {
			res.status(400).json({
				errors: [
					{
						location: 'body',
						msg: 'email is incorrect',
						param: 'email',
					},
				],
			});
			return;
		}

		const { password, ...userWithoutPass } = user;
		(req.session as any).user = user;
		res.json({ user: userWithoutPass });
	} catch (err) {
		res.status(500).json({
			errors: [
				{
					location: 'body',
					msg: 'Internal server error',
					param: 'email',
				},
			],
		});
	}
};

export const me_get: Controller = async (req, res) => {
	if (!(req.session as any).user) {
		res.json({ user: null });
		return;
	}

	const { password, ...user } = (req.session as any).user;
	res.json({ user });
};

export const logout_get: Controller = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.status(500).json({
				errors: [
					{
						location: 'session',
						msg: 'Internal server error',
						param: 'user',
					},
				],
			});
			return;
		}

		res.clearCookie('qid');
		res.json({
			success: {
				msg: 'user logged out successfully',
			},
		});
	});
};
