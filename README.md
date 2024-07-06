# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Develop locally with remote resources

1. Clone the [remote resources repository](https://github.com/devtodollars/devtodollars-resources) to a directory

```
git clone https://github.com/devtodollars/devtodollars-resources.git
```

2. Run the below command to see docusaurus locally (does not include hot restart)

```
REPO_DIR="/PATH/TO/CLONED/REPO" npm run start
```
