# Version history

## Version 0.5.1

### Style changes

- Fixes `multiline-comment-style` value to be `separate-lines` 

### Misc

- Updated peer dependencies to match not exact, but `>=` versions


## Version 0.5.0

### Style changes

- We now always enforce key quotes with `quote-props` rule
- We now enforce trailing commas, the same way we do it in our `python` code
- We now enforce to name unused variables with `_` prefix
- We now enforce to name variables longer than `1` symbol
- We now restrict to use names for variables from a blacklist
- New multiline rules: `lines-between-class-members` and `function-paren-newline`
- Now we track a bunch of complexity rules, look for `complexity` section in `index.js`
- We now also check some of `regex` related stuff: `require-unicode-regexp`, `no-misleading-character-class`
- We now use some more `async` related rules: `no-async-promise-executor`, `require-atomic-updates`
- We now use some more comment-related rules: `multiline-comment-style`

### Misc

- Updated peer dependencies to `eslint@5`


## Version 0.4.0

- Adds multiple rules from `eslint-config-airbnb`


## Version 0.3.0

- Adds `quote-props: as-needed`
- Adds stricter `promise` rules
- Bumps `eslint-plugin-promise` version
- Disables `security/detect-non-literal-fs-filename`, it triggers for any
  methods with the same names as in `fs` module: `exists()`, and so on


## Version 0.2.0

- Changes how rules are separated
- Enforces multiple new rules


## Version 0.1.1

- Moves all dependencies into `peerDependencies`
- Enforces stricter spacing rules


## Version 0.1.0

- Initial release
