import knex from 'knex';

const connection = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV !== 'development',
    }
  : {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      ssl: process.env.NODE_ENV !== 'development',
    };

const client = knex({
  client: 'pg',
  connection,
});

export default client;
