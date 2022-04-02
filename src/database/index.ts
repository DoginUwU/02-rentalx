import path from "path";
import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";

const dataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "docker",
    password: "admin",
    database: "rentalx",
    synchronize: true,
    migrations: [path.join(__dirname, "migrations", "*.ts")],
    entities: [Category],
});

dataSource.initialize();

export default dataSource;
