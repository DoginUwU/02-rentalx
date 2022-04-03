import { injectable } from "tsyringe";
import { Repository } from "typeorm";

import dataSource from "../../../../database";
import { ICreateSpecificationDTO } from "../../dtos/ICreateSpecificationDTO";
import { Specification } from "../../entities/Specifications";
import { ISpecificationRepository } from "../ISpecificationsRepository";

@injectable()
class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = dataSource.getRepository(Specification);
    }

    async create(data: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create(data);

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            where: { name },
        });

        return specification;
    }
}

export { SpecificationsRepository };
