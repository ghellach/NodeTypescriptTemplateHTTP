import {Router} from 'express';
import * as appController from './appController';

const router: Router = Router();

router.use("/app", 
    router.use("/", appController.main)
);

export default router;