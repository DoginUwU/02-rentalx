import { parse } from "csv-parse";
import fs from "fs";

import { CategoriesRepository } from "../../repositories/implementations/CategoriesReposity";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async loadCategories(
        file: Express.Multer.File
    ): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = [];

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, description] = line;

                categories.push({
                    name,
                    description,
                });
            });

            parseFile.on("end", () => {
                resolve(categories);
            });

            parseFile.on("error", (err) => {
                reject(err);
            });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.forEach((category) => {
            const categoryAlreadyExists = this.categoriesRepository.findByName(
                category.name
            );

            if (categoryAlreadyExists) return;

            this.categoriesRepository.create(category);
        });
    }
}

export { ImportCategoryUseCase };
