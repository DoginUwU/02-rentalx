import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

const ensureAuthenticated = async (
    req: Request,
    _: Response,
    next: NextFunction
): Promise<void> => {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError("Token missing", 401);

    const [, token] = authorization.split(" ");

    try {
        const { sub: userId } = verify(token, process.env.SECRET_TOKEN);

        const usersRepository = container.resolve(UsersRepository);

        const user = await usersRepository.findById(userId as string);

        if (!user) throw new AppError("User does not exists", 401);

        req.user = {
            id: userId as string,
        };

        return next();
    } catch (error) {
        throw new AppError("Invalid token", 401);
    }
};

export { ensureAuthenticated };
