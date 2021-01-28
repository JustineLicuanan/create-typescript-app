import { Router } from 'express';

import * as controllers from '../controllers/HiControllers';
import { isAuth } from '../middlewares/isAuth';

const router = Router();

// Routes
router.get('/', isAuth, controllers.hi_get);

export default router;
