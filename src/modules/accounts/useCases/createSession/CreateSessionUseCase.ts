import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class CreateSessionUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) throw new AppError("Email or password incorrect");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new AppError("Email or password incorrect");

        const token = sign({}, process.env.SECRET_TOKEN, {
            subject: user.id,
            expiresIn: "1d",
        });

        return {
            user: {
                email,
                name: user.name,
            },
            token,
        };
    }
}

export { CreateSessionUseCase };
