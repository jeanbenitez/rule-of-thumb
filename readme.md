# Rule of Thumb

👍 vs 👎

## Getting Started 📝

1. Clone this repo
2. Install dependencies

```bash
npm install
```

3. Run project in some of these modes

To run in a local development server:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To build the app for github pages, run:

```bash
npm run build:gh-pages -- PATH_OF_GITHUB_PAGE
```

where PATH_OF_GITHUB_PAGE is probably the github repo name (default: '/rule-of-thumb/')

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

## 3rd Party 🥳

- I used a framework-agnostic framework (?) called [Stencil](https://stenciljs.com/)
- I relied on two external dependencies (local-db and timeago.js)

## About Stencil 🔧

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Have a good day! 👋
:)
