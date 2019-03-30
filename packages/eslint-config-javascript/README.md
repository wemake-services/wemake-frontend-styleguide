# eslint-config-wemake

[![wemake.services](https://img.shields.io/badge/-wemake.services-green.svg?label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](https://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/eslint-config-wemake.svg?branch=master)](https://travis-ci.org/wemake-services/eslint-config-wemake)

Shareable configuration for [`eslint`](https://github.com/eslint/eslint).

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

The main idea of this configuration is to be:

1. Highly opinionated (!)
2. Strict about syntax and secure by default
3. Enforces best-practices

The ultimate goal of this project is to become the strictest config available.


## Installation

```bash
npm install --save-dev @wemake-services/eslint-config-javascript
```

Then, modify your `eslint` configuration:

```json
{
  "extends": [
    "@wemake-services/javascript"
  ]
}
```

Done! Later you can modify your configuration to include 
any extra rules you need.

## License

MIT.
