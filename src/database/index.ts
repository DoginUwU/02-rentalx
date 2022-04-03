import path from "path";
import { DataSource } from "typeorm";

import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specifications";

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "admin",
    database: "rentalx",
    synchronize: true,
    migrations: [path.join(__dirname, "migrations", "*.ts")],
    entities: [Category, Specification, User],
});

dataSource.initialize();

export default dataSource;
