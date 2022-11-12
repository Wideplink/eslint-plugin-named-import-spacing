# eslint-plugin-destructuring-import-spacing
[![npm](https://img.shields.io/npm/v/eslint-plugin-destructuring-import-spacing)](https://npmjs.com/package/eslint-plugin-destructuring-import-spacing)

adjust spacing in brackets of named imports

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-destructuring-import-spacing`:

```sh
npm install eslint-plugin-destructuring-import-spacing --save-dev
```

## Usage

Add `destructuring-import-spacing` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "destructuring-import-spacing"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "destructuring-import-spacing/destructuring-import-spacing": 2
    }
}
```

## Supported Rules

### `destructuring-import-spacing`
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
