# @wemake-services/stylelint-config-scss

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) 
[![Build Status](https://travis-ci.com/wemake-services/wemake-frontend-styleguide.svg?branch=master)](https://travis-ci.com/wemake-services/wemake-frontend-styleguide)
[![wemake-frontend-styleguide](https://img.shields.io/badge/style-wemake-000000.svg)](https://github.com/wemake-services/wemake-frontend-styleguide)

Strict shareable config for [`stylelint`](https://github.com/stylelint/stylelint) and SCSS.


## Features

- Extends [`stylelint-standard`](https://github.com/stylelint/stylelint-config-standard) config
- Turns on almost all rules from [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss)
- Protects you from common mistakes
- Handles how `$variables` are defined and enforces to use them
- Handles how `@mixins`, `%placeholders`, and `@functions` should be defined
- Also checks `@imports`, declarations, `url()`s, and other minor things
- Enforces to use `autoprefixer` by restricting vendor prefixes
- Maintains consistent declarations order with [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)
- Has [sensible defaults](https://github.com/wemake-services/wemake-frontend-styleguide/blob/master/packages/stylelint-config-scss/index.js)
- Is opened for further extension!


## Bundled plugins

> TODO: list plugins


## Installation

```bash
npm install --save-dev @wemake-services/stylelint-config-scss
```

And then extend it in your configuration:

```json
{
  "extends": [
    "@wemake-services/stylelint-config-scss"
  ]
}
```


## Code example

This code is considered valid (and beautiful):

```scss
$mobile: 450px;

@function em ($size, $base-font: 16px) {
  @return $size * 1em / $base-font;
}

%absctract-div {
  display: block;
}

div {
  @extend %abstract-div;

  background-image: url('https://placehold.it/400x200');
  padding: em($size: 5px);

  @media screen and (min-width: $mobile) {
    display: none;
  }
}
```

Do you want to see it in action? 
Take a look at our [`Vue` template](https://github.com/wemake-services/wemake-vue-template)! 


## License

MIT.
