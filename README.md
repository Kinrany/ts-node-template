# ts-node-template

Template for a server written in TypeScript with no compilation step

## Deployment

You will need [nvm], [pnpm] and [PostgreSQL] installed.

```bash
# clone the repo
git clone https://github.com/Kinrany/ts-node-template.git
cd ts-node-template

# install specified version of NodeJS
nvm install

# install packages
# (you may use npm or yarn if you don't need the lock file)
pnpm install

# initialize the database
# see Development for using a local database

# start the server
# see ./src/env.ts for available parameters if you're not using a local database
pnpm run start
```

[nvm]: https://github.com/nvm-sh/nvm
[pnpm]: https://pnpm.js.org/en/installation
[postgresql]: https://www.postgresql.org/download/

## Development

```bash
# initialize a local database
pnpm run postgres-init

# start the database
pnpm run postgres-start

# start the server, restart automatically
pnpm run watch

# stop the database
pnpm run postgres-stop
```
