import { injectable } from "tsyringe";
import { Repository } from "typeorm";

import dataSource from "../../../../database";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

@injectable()
class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = dataSource.getRepository(Category);
    }

    async create(data: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create(data);

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = this.repository.findOne({
            where: { name },
        });

        return category;
    }
}

export { CategoriesRepository };
