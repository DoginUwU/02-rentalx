import { Specification } from "../model/Specifications";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create(data: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export type { ISpecificationRepository, ICreateSpecificationDTO };
