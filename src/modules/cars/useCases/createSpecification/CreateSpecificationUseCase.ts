import { inject, injectable } from "tsyringe";

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
            throw new Error("Specification already exists");

        await this.specificationRepository.create(data);
    }
}

export { CreateSpecificationUseCase };
