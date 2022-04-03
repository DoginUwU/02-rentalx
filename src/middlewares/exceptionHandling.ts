import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";

const exceptionHandling = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: true,
            message: err.message,
        });
    }

    return res.status(500).json({
        error: true,
        message: `Internal server error - ${err.message}`,
    });
};

export { exceptionHandling };
