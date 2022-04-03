import { Specification } from "../../entities/Specifications";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    async create(data: ICreateSpecificationDTO): Promise<void> {
        const specification = new Specification();

        Object.assign(specification, {
            ...data,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationsRepository };
