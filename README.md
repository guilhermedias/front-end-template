This is a template repository for front-end web applications built with [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Dependencies

Here is a list of software you should have installed before trying to run the project:

- Git
- Node

Set up the Git hooks:

```bash
$ git config --local core.hooksPath .git-hooks
```

Install the dependencies:

```bash
$ npm install
```

Run the tests:

```bash
$ npm run test
```

Start the development server:

```bash
$ npm run dev
```

Check the running application at [http://localhost:3000](http://localhost:3000).

## Notes

### Vulnerabilities

ESLint is pulling a vulnerable version of the Ajv package. ESLint is not compatible with
the latest versions of Ajv which include the vulnerability fix, so overriding the version
of Ajv is not a viable option. For now we have to wait until ESLint releases a new package
version that integrates with the latests versions of Ajv. As per ESLint maintainers, the
package is not impacted by the vulnerability, so it is safe to ignore the warnings. More
details can be found [here](https://github.com/eslint/eslint/issues/20508).
