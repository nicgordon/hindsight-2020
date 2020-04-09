# Hindsight 2020
Proof-of-concept application to assist in tracing possible transimission locations of the coronavirus commonly known as covid-19.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Configuration
Firstly, create a `.env` file by copying the example one and populating it.
```bash
cp .env.example .env
```
If you are setting up for the first time then you can choose any password and database name.

### Database
Spin up the postgres docker instance:
```bash
docker-compose up
```

You will then need to connect to the instance, create a database, and apply the schema found in [database/schema.sql]().

### Web
Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!
