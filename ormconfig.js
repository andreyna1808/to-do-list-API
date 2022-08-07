const developmentEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrations: ["./src/infra/database/migrations/*.ts"],
  entities: ["./src/infra/entities/*.ts"],
  cli: {
    migrationsDir: "./src/infra/database/migrations"
  },
  ssl: false,
}

const productionEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrations: ["./build/infra/database/migrations/*.js"],
  entities: ["./build/infra/entities/*.js"],
  cli: {
    migrationsDir: "./src/infra/database/migrations"
  },
  ssl: process.env.NODE_ENV === "production" ? {
    rejectUnauthorized: false
  } : false
}

module.exports = process.env.NODE_ENV === "production" ? productionEnv : developmentEnv
