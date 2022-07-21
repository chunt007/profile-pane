# profile-pane
SolidOS pane that displays a personal profile page

This is a re-write that is going to replace the current profile pane

![CI](https://github.com/solid/profile-pane/workflows/CI/badge.svg)

## Contribute

### Tech stack

- Typescript
- lit-html
- Jest
- Eslint
- SolidOS

### Tests

To run all tests:
```shell script
npm test
```

#### Unit tests

Unit tests use `jest` and are placed next to the tested file as `*.spec.ts` files.

#### Integration tests

Integration tests verify the rendering of the whole pane (with mocked HTTP requests) and are placed under `./src/integration-tests`.

### Dev Server

Start a webpack dev server:

```shell script
npm start
```

Visit `http://localhost:8080/` to render the pane. Adjust `const webIdToShow` in `./dev/index.ts` to show a
 different profile.

Once you have given the proper write/read permissions between your 'localhost:8080' and the pod provider of your choice, you don't have to click "Log In" under "pane under development" everytime you test new features. Anytime you are already logged into your account and edit your server side profile, example being "https://chunt.solidweb.org/profile/card#me" those changes will also render on the profile-pane dev server once you hit refresh. 

Whenever you use a source-code editor like VSCode, you simply save any changes on your end and that will reflect in real time on the profile-pane dev server.
 
### Build

```
npm run build
```

The build is done by `tsc`, webpack is only used as dev server and not for production build.
