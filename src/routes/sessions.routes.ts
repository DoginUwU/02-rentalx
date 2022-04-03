import { Router } from "express";

import { CreateSessionController } from "../modules/accounts/useCases/createSession/CreateSessionController";

const sessionsRoutes = Router();

sessionsRoutes.post("/", new CreateSessionController().handle);

export { sessionsRoutes };
