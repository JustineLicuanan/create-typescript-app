import { Router } from 'express';

import * as controllers from '../controllers/HiControllers';

const router = Router();

// Routes
router.get('/', controllers.hi_get);

export default router;
