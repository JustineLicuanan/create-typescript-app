import { Router } from 'express';

import * as controllers from '../controllers/AuthControllers';
import * as validators from '../validators/AuthValidators';

const router = Router();

// Routes
router.post(
	'/register',
	validators.registerValidator,
	controllers.register_post
);
router.post('/login', validators.loginValidator, controllers.login_post);
router.get('/me', controllers.me_get);
router.get('/logout', controllers.logout_get);

export default router;
