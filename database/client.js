import knex from 'knex';

const connection = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV !== 'development',
    }
  : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      ssl: process.env.NODE_ENV !== 'development',
    };

const client = knex({
  client: 'pg',
  connection,
});

export default client;
