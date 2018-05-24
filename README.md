# eslint-config-jsdoc-essential

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/eslint-config-wemake.svg?branch=master)](https://travis-ci.org/wemake-services/eslint-config-wemake)

Shareable configuration for [`eslint`](https://github.com/eslint/eslint).

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

The main idea of this configuration is to be:

1. Strict about syntax
2. Secure by default
3. Restrictive about modifications


## Installation

```bash
npm install --save-dev eslint-config-wemake
```

Then, modify your `eslint` configuration:

```json
{
  "extends": [
    "wemake"
  ]
}
```

Done! Later you can modify your configuration to include 
any extra rules you need.

## License

MIT.
