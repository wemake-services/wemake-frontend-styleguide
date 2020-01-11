# @wemake-services/eslint-config-jsdoc

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) 
[![Build Status](https://travis-ci.com/wemake-services/wemake-frontend-styleguide.svg?branch=master)](https://travis-ci.com/wemake-services/wemake-frontend-styleguide)
[![wemake-frontend-styleguide](https://img.shields.io/badge/style-wemake-000000.svg)](https://github.com/wemake-services/wemake-frontend-styleguide)

Shareable configuration for [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc).

The main idea of this configuration is to be:

1. Strict about syntax
2. Permissive about types (because we use `flow` for type annotations)
3. Opened for further extensions


## Installation

```bash
npm install --save-dev @wemake-services/eslint-config-jsdoc
```

Then, modify your `eslint` configuration:

```json
{
  "extends": [
    "@wemake-services/jsdoc"
  ]
}
```

Done! Later you can modify your configuration to include any extra rules you need.


## Code example

This code is considered valid (and beautiful):

```js
/**
 * Imaginary function to take same slices from imaginary pizza.
 * This function is created, because we love pizza.
 *
 * @param pizza - {Array} List of slices.
 * @param numberOfSlices - Number of slices to take away.
 * @returns {Array} What is left of our pizza.
 */
function takeSlices (pizza, numberOfSlices) {
  return pizza.splice(0, numberOfSlices)
}
```


## License

MIT.
