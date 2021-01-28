import { checkSchema } from 'express-validator';

import { isEmailNotExist } from '../lib/isEmailNotExist';
import { errorHandler } from '../middlewares/errorHandler';

export const registerValidator = [
	...checkSchema({
		email: {
			in: ['body'],
			notEmpty: {
				options: {
					ignore_whitespace: true,
				},
				errorMessage: 'email is required',
			},
			isEmail: {
				errorMessage: 'email must be a valid email',
			},
			custom: {
				options: [isEmailNotExist()],
			},
			normalizeEmail: true,
		},
		password: {
			in: ['body'],
			notEmpty: {
				errorMessage: 'password is required',
			},
			isStrongPassword: {
				errorMessage: 'password must be strong',
			},
		},
	}),
	errorHandler,
];

export const loginValidator = [
	...checkSchema({
		email: {
			in: ['body'],
			notEmpty: {
				options: {
					ignore_whitespace: true,
				},
				errorMessage: 'email is required',
			},
			isEmail: {
				errorMessage: 'email must be a valid email',
			},
			normalizeEmail: true,
		},
		password: {
			in: ['body'],
			notEmpty: {
				errorMessage: 'password is required',
			},
		},
	}),
	errorHandler,
];
