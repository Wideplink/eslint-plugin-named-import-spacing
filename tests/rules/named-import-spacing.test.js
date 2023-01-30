const assert = require("assert");
const { RuleTester } = require("eslint");

const targetFromRoot = require("../../dist").rules["named-import-spacing"];
const target = require("../../dist/rules/named-import-spacing");

describe("Load the rule successfully", function(){
  it("Equal", function(){
    assert.equal(targetFromRoot, target.default);
  });
});

const tester = new RuleTester();
const parserOptions = {
  sourceType: "module",
  ecmaVersion: 2015,
};
tester.run("destructuring-import-spacing", target.default, {
  valid: [
    {
      code: 'import { a } from "some-module"',
      parserOptions,
    },
    {
      code: 'import {a} from "some-module" /* never */',
      options: ["never"],
      parserOptions,
    },
    {
      code: 'import { a, b } from "some-module"',
      parserOptions,
    },
    {
      code: 'import { a,b } from "my-module"',
      parserOptions,
    },
    {
      code: 'import {a, b} from "some-module" /* never */',
      options: ["never"],
      parserOptions,
    },
    {
      code: 'const {a, b} = myObject',
      parserOptions,
    },
    {
      code: 'const { a, b } = myObject',
      parserOptions,
    }
  ],
  invalid: [
    {
      code: 'import {a} from "some-module"',
      errors: [target.errorMessages.missingSpace],
      output: 'import { a } from "some-module"',
      parserOptions,
    },
    {
      code: 'import { a } from "some-module" /* never */',
      options: ["never"],
      errors: [target.errorMessages.unexpectedSpace],
      output: 'import {a} from "some-module" /* never */',
      parserOptions,
    },
    {
      code: 'import { a, b} from "some-module"',
      errors: [target.errorMessages.missingSpace],
      output: 'import { a, b } from "some-module"',
      parserOptions,
    },
    {
      code: 'import {a, b } from "some-module"',
      errors: [target.errorMessages.missingSpace],
      output: 'import { a, b } from "some-module"',
      parserOptions,
    },
    {
      code: 'import {a, b} from "some-module"',
      errors: [target.errorMessages.missingSpace, target.errorMessages.missingSpace],
      output: 'import { a, b } from "some-module"',
      parserOptions,
    },
    {
      code: 'import { a, b } from "some-module" /* never */',
      options: ["never"],
      errors: [target.errorMessages.unexpectedSpace, target.errorMessages.unexpectedSpace],
      output: 'import {a, b} from "some-module" /* never */',
      parserOptions,
    },
  ],
});
