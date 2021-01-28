import { CustomValidator } from 'express-validator';
import isEmail from 'validator/lib/isEmail';

import { User } from '../entity/User';

type IsEmailNotExist = (options?: { forUpdate?: boolean }) => CustomValidator;

export const isEmailNotExist: IsEmailNotExist = (options) => async (
	email,
	{ req }
) => {
	if (isEmail(email)) {
		const user = await User.findOne({ email }, { select: ['id'] });

		if (!(!user || (!!options?.forUpdate && user.id === req.params?.id))) {
			return Promise.reject('email already exist');
		}

		return Promise.resolve();
	}
};
