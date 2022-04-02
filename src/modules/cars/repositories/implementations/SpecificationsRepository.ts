import { Specification } from "../../model/Specifications";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create(data: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            ...data,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationsRepository };
