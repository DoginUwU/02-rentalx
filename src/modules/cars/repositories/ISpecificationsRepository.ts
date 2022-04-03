import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";
import { Specification } from "../entities/Specifications";

interface ISpecificationRepository {
    create(data: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export type { ISpecificationRepository };
