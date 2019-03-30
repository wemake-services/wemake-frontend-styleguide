# eslint-config-flowtype

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) 
[![wemake-frontend-styleguide](https://img.shields.io/badge/style-wemake-000000.svg)](https://github.com/wemake-services/wemake-frontend-styleguide)
[![Build Status](https://travis-ci.org/wemake-services/wemake-frontend-styleguide.svg?branch=master)](https://travis-ci.org/wemake-services/wemake-frontend-styleguide)

Shareable configuration for [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype).

The main idea of this configuration is to be:

1. Strict about syntax
2. Permissive about types
3. Opened for further extensions


## Installation

```bash
npm install --save-dev @wemake-services/eslint-config-flowtype
```

Then, modify your `eslint` configuration:

```json
{
  "extends": [
    "@wemake-services/flowtype"
  ]
}
```

Done! Later you can modify your configuration to include any extra rules you need.


## Code example

This code is considered valid (and beautiful):

```js
type Client<T> = {
  name: string,
  surname: string,
  age: number | string,
  isRegular: boolean,
  reference: T,
  related: Array<T>,
  preferences: Array<string | Promise<string>>
}

function greetClient (client: Client<string>): string {
  return `Hi, ${client.name}-{$client.reference}`
}
```


## License

MIT.
