import { Specification } from "../entities/Specifications";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create(data: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export type { ISpecificationRepository, ICreateSpecificationDTO };
