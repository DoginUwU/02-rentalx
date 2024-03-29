import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) throw new AppError("User already exists");

        const passwordHash = await hash(data.password, 8);

        await this.usersRepository.create({
            ...data,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
