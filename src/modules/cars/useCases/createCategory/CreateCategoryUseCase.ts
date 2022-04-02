import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private repository: ICategoriesRepository) {}

    execute(data: IRequest): void {
        const categoryAlreadyExists = this.repository.findByName(data.name);

        if (categoryAlreadyExists) throw new Error("Category already exists");

        this.repository.create(data);
    }
}

export { CreateCategoryUseCase };
