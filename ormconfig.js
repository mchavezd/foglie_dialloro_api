/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");
const PostgressConnectionStringParser = require("pg-connection-string");

dotenv.config();



const connectionOptions = PostgressConnectionStringParser.parse(
  process.env.DATABASE_URL || "",

);



module.exports = {
  type: "postgres",
  host: "foglie-db.cckyrshfhfyd.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "foglie1380",
  // database: connectionOptions.database || "foglie",
  database: "postgres",
  entities: ["./dist/**/*.entity{.ts,.js}"],
  // seeds: ["./src/database/**/*.seed.ts"],
  // factories: ["./src/database/**/*.factory.ts"],
  synchronize: true,
  migrations: ["migration/*.js"],
  cli: {
    migrationsDir: "migration",
  },
  logging: true,

  extra: {
    sslmode: "disable",
  },
  ssl: false,
  sslmode: "disable",
}
