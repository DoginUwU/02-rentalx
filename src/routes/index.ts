import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { sessionsRoutes } from "./sessions.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use("/sessions", sessionsRoutes);

export { router };
