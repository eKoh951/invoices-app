# Invoices App

This project has been bootstrapped with [Turborepo](https://turbo.build/repo/docs).

## Design file

[Figma link](https://www.figma.com/file/mkIpkIjPBTNHOKSxyDz84K/invoice-app?t=fln7hbL3Pzkmuf5F-0)

# Software

- `VSCode` as text editor.
- MongoDB (?) as database @iAsure, document this later
-

# Installations

## Install Node version manager

For [MacOS/Linux](https://github.com/nvm-sh/nvm)
For [Windows](https://github.com/coreybutler/nvm-windows)

Node version `18.14.1`

```bash
nvm install 18.14.1
```

```bash
nvm use 18.14.1
```

## Install Turbo CLI

```bash
npm install turbo --global
```

## Install Vercel CLI

```bash
npm i -g vercel
```

## Nest.js CLI

```bash
npm i -g @nestjs/cli
```

### Run the whole project

```bash
turbo dev
```

Web runs on `localhost:3000`
Docs runs on `localhost:3001`
API runs on `localhost:8000`

### Run individual projects

```bash
turbo dev --filter=web
```

Web project will run only.

### Build

To build all apps and packages, run the following command:

```
turbo build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```bash
turbo link
```

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `api`: a [Nest.js](https://nestjs.com/) api
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
