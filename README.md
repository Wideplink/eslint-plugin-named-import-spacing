# eslint-plugin-named-import-spacing
[![npm](https://img.shields.io/npm/v/eslint-plugin-named-import-spacing)](https://npmjs.com/package/eslint-plugin-named-import-spacing)

adjust spacing in brackets of named imports

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-named-import-spacing`:

```sh
npm install eslint-plugin-named-import-spacing --save-dev
```

## Usage

Add `named-import-spacing` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "named-import-spacing"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "named-import-spacing/named-import-spacing": 2
    }
}
```

## Supported Rules

### `named-import-spacing`
Format spaces in named import statements

#### Options
This rule receives one argument. If the argument is `"always"` then variables require spaces before and after it. If `"never"` then no space is allowed either before or after.
- `"always"` (default)  
  :x: **Incorrect**  
  ```js
  import {a, b} from "some-module";
  import { a, b} from "some-module";
  ```
  :white_check_mark: **Correct**  
  ```js
  import { a, b } from "some-module";
  import { a,b } from "some-module";
  ```
- `"never"`  
  :x: **Incorrect**  
  ```js
  import { a, b } from "some-module";
  import {a,b } from "some-module";
  ```
  :white_check_mark: **Correct**  
  ```js
  import {a, b} from "some-module";
  import {a} from "some-module";
  ```

> Use [`comma-spacing`](https://eslint.org/docs/latest/rules/comma-spacing) if you want to manage spaces between multiple variables.

Some other rules may be added in the future.
