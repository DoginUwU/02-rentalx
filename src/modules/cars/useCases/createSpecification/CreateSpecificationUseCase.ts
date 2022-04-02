import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute(data: IRequest) {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(data.name);

        if (specificationAlreadyExists)
            throw new Error("Specification already exists");

        this.specificationRepository.create(data);
    }
}

export { CreateSpecificationUseCase };
