# Create TypeScript App (Create TSA)

Set up a modern TypeScript app by running one command

## Quick Overview

```bash
npx create-tsa my-app
```

You can also install it globally, and run `tsa my-app` command

```bash
yarn global add create-tsa
tsa my-app
```

## Usage

Below is the list of options you can use with this CLI, run `npx create-tsa --help` command for more info:

- `-t, --template <app>`

Choices: graphql, express, tsc\
Description: Specify app template to use (set to graphql by default)

```bash
# `-t` Example
npx create-tsa my-app -t express
```

- `-s, --simple`

Description: Specify if you want to use only the simple (without auth) template

```bash
# `-s` Example 1
npx create-tsa my-app -s

# `-s` Example 2
npx create-tsa my-app -t express -s
```

## License

Create TypeScript App (Create TSA) is open source software [licensed as MIT](https://github.com/JustineLicuanan/create-typescript-app/blob/master/LICENSE).
