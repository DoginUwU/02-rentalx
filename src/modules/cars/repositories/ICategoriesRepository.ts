import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create(data: ICreateCategoryDTO): Promise<void>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
}

export type { ICategoriesRepository, ICreateCategoryDTO };
