import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("avatar"));

usersRoutes.post("/", new CreateUserController().handle);

usersRoutes.use(ensureAuthenticated);

usersRoutes.patch(
    "/avatar",
    uploadAvatar.single("file"),
    new UpdateUserAvatarController().handle
);

export { usersRoutes };
