import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private repository: ISpecificationRepository) {}

    execute(data: IRequest) {
        const specificationAlreadyExists = this.repository.findByName(
            data.name
        );

        if (specificationAlreadyExists)
            throw new Error("Specification already exists");

        this.repository.create(data);
    }
}

export { CreateSpecificationUseCase };
