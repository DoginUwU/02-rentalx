import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute(): Promise<any[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
