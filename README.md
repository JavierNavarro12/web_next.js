# AIFinder

AIFinder is a modern Next.js web application to discover and compare the best AI tools.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Linting & Formatting

Run ESLint:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

## Testing

This project uses **Jest** and **Testing Library** for unit tests.

- Run all tests:

```bash
npm test
```

- View code coverage:

```bash
npm test -- --coverage
```

## Continuous Integration (CI)

This repository uses **GitHub Actions** to automatically run linting and tests on every push and pull request to the `main` branch.

You can find the workflow in `.github/workflows/ci.yml`.

## Best Practices

- Keep tests updated when modifying components.
- Use environment variables in a `.env` file (and provide a `.env.example` for other developers).
- If you add user logic or interaction, consider adding end-to-end tests (Cypress).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – an interactive Next.js tutorial.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
