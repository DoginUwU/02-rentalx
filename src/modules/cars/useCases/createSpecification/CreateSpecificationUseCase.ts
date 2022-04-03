import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateSpecificationDTO } from "../../dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute(data: ICreateSpecificationDTO): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(data.name);

        if (specificationAlreadyExists)
            throw new AppError("Specification already exists");

        await this.specificationRepository.create(data);
    }
}

export { CreateSpecificationUseCase };
