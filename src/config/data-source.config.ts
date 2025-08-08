import * as dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

export const config: DataSourceOptions = {
  name: "default",
  type: process.env.TYPEORM_TYPE as
    | "mariadb"
    | "mysql"
    | "postgres"
    | "sqlite"
    | "mssql",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES as string],
  migrations: [__dirname + (process.env.TYPEORM_MIGRATIONS ?? "")],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
  dropSchema: process.env.TYPEORM_DROP_SCHEMA === "true",
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === "true",
};

export const configNoSynchronize = {
  ...config,
  migrationsRun: false,
  synchronize: false,
};
