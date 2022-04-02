import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute(data: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(data.name);

        if (categoryAlreadyExists) throw new Error("Category already exists");

        await this.categoriesRepository.create(data);
    }
}

export { CreateCategoryUseCase };
