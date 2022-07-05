# @fvilers/is-object

A TypeScript type guard that validates if the given value is an object

## Installation

```
npm install @fvilers/is-object
```

or

```
yarn add @fvilers/is-object
```

# ECMAScript module

Starting with version 2.0.0, this library will be published as an ECMAScript module.

## Usage

```ts
import { isObject } from "@fvilers/is-object";

const variable: any = { hello: "world" };

if (isObject(variable)) {
  // From here, variable is strongly typed as an object
  console.log(
    "Variable is an object with key(s)",
    Reflect.ownKeys({ hello: "world" })
  );
} else {
  console.log("Variable is not an object");
}
```

It will output:

```
Variable is an object with key(s) [ 'hello' ]
```
