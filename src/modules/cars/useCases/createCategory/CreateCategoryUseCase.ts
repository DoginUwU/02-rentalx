import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute(data: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(data.name);

        if (categoryAlreadyExists)
            throw new AppError("Category already exists");

        await this.categoriesRepository.create(data);
    }
}

export { CreateCategoryUseCase };
