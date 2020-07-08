# Typescript Tutorial

## Working with Types

### Core DataTypes

| Type       | Defination                                                           |
| ---------- | -------------------------------------------------------------------- |
| `number`   | There is only one type ie no `int` or `float` only number            |
| `string`   | Text eg `"Hey Bros"`                                                 |
| `boolean`  | `true` or `false`                                                    |
| `object`   | Any javascript object eg `{name:Henry}`                              |
| `Array`    | List eg `[0,1,2,3,4]`                                                |
| `Tuple`    | A fixed size array with fixed types eg `useState = [state,setState]` |
| `enum`     | Used for creating constants eg `enum Role = {ADMIN,REG}`             |
| `Any`      | You can store any type using any                                     |
| `Function` | Functions                                                            |

How to use types in code

```ts
/**
 * The function getSum(a,b) takes in 2 numbers and returns a number
 */
function getSum(a: number, b: number): number {
  return a + b;
}

/**
 * You can also create variables and give them a type
 */
let i: number;
let name: string;

/**
 * To craete objects, Typescript can infer the types so yo can create a normal object eg
 */

const obj = {
  prop_one: value_one,
  prop_two: value_two,
};

/**
 * To add the types use the following syntax but its easier of typescript to infer the types
 */

const obj: {
  prop_one: type_of_prop_one;
  prop_two: type_of_prop_two;
} = {
  prop_one: value_of_prop_one,
  prop_two: value_of_prop_two,
};

/**
 * Using Arrays
 */

const array = ["One", "Two", "Three"]; // Javascript infers arrya as of type string[]

/**
 * Using Tuples
 * To use tuples you must override the inference
 */

const React : {
    state:[type,type]
} = {
    state:[val:type,val:type]
}

```

## Creating Union Types

```ts
/**
 * You can assign more than one type to a variable
 * The following function takes two inputs and combines them
 */

function combine(input_one: number | string, input_two: number | string) {
  if (typeof input_one === "number" && typeof input_two === "number") {
    return input_one + input_two;
  } else if (typeof input_one === "string" && typeof input_two === "string") {
    return input_one.toString() + input_two.toString();
  } else {
    throw new Error("Invalid Inputs");
  }
}
```

## Literal Types

```ts
/**
 * Suppose you want a varaible to only have 2 possibe values, Then you can use literal types
 */
function sayHi(name: "Maxwell" | "Henry") {
  return name;
}
```

## Creating Type Aliases

```ts
/**
 * You create type aliases using the type keyword
 */

type CombinedType = number | string | boolean ... ;
```

## Functions in Ts

```ts
/**
 * The retrun type of a function is infered by Ts
 */

// Function Types
let mFunction: (
  param_one: typeof_param_one,
  param_two: typeof_param_two
) => typeof_result;
```
