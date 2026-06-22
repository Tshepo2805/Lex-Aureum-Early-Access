import { Router, type IRouter } from "express";
import healthRouter from "./health";
import waitlistRouter from "./waitlist";
import applicationsRouter from "./applications";

const router: IRouter = Router();

router.use(healthRouter);
router.use(waitlistRouter);
router.use(applicationsRouter);

export default router;
