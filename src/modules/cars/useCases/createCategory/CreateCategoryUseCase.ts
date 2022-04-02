import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(data: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(
            data.name
        );

        if (categoryAlreadyExists) throw new Error("Category already exists");

        this.categoriesRepository.create(data);
    }
}

export { CreateCategoryUseCase };
