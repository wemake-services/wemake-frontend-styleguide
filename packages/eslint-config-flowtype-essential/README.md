# eslint-config-flowtype-essential

[![wemake.services](https://img.shields.io/badge/-wemake.services-green.svg?label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](https://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/eslint-config-flowtype-essential.svg?branch=master)](https://travis-ci.org/wemake-services/eslint-config-flowtype-essential)

Shareable configuration for [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype).

The main idea of this configuration is to be:

1. Strict about syntax
2. Permissive about types
3. Opened for further extensions


## Installation

```bash
npm install --save-dev eslint-config-flowtype-essential
```

Then, modify your `eslint` configuration:

```json
{
  "extends": [
    "flowtype-essential"
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
