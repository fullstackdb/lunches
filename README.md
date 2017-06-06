

# Lunches app
A simple app for ordering lunches built with **Angular2**.

- Angular2 `2.4.1`
- Angular Material `2.0.0-beta.3`
- SASS
- Webpack
  - Inlines external SCSS files
  - Inlines external HTML templates
  - Bundles and minifies release builds
  - Injects style and script tags into index.html


Quick Start
-----------

```shell
$ git clone https://github.com/fullstackdb/lunches.git
$ yarn install
$ npm run start
```

### Build the app:
```shell
$ npm run build
```


Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run server`|Start express server @ `localhost:3001` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
