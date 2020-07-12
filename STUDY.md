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

## Configure Ts

Run Ts in watch mode

```bash
tsc file.ts -w # Run ts in watch mode
```

To Configure Ts run : This will create a tsconfig.json file

```bash
tsc --init  # Create tsconfig.json
```

| Property           | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `exclude`          | An array containig files and dir that should not be compiled           |
| `include`          | An array containig the files that should be complied                   |
| `files`            | An array containig the list of files that are to be compiled           |
| `target`           | The target js version that Ts should be compiled to                    |
| `outDir`           | Where the generated Js files are placed                                |
| `rootDir`          | Where the Ts files are located - Maintains the file structure          |
| `RemoveComments`   | Removes the comment from the Js files                                  |
| `noImplicitAny`    | Raise error on expressions and declarations with an implied 'any' type |
| `strictNullChecks` | Enable strict null checks                                              |

## Classes in Ts

```ts
/**
 * Sample class in Ts
 */

class _Worker {
  _name: string;
  _salary: number;
  _title: string;

  // Constructor method
  constructor(_name: string, _salary: number, _title: string) {
    this._name = _name;
    this._salary = _salary;
    this._title = _title;
  }

  // Declare a function
  identify() {
    console.log(
      `Hello my name is ${this._name}, my job title is ${this._title} and I earn ${this._salary} $`
    );
  }
}
```

### Private,Public and ReadOnly Access modifiers

| Access Modifier | Defination                                                            |
| --------------- | --------------------------------------------------------------------- |
| `public`        | instance variables can be accessed and changed                        |
| `private`       | instance variables cannot be accessed                                 |
| `readonly`      | instance variables can be accessed but their values cannot be changed |

## Modules in Ts

**If you are not using webpack or a bundler in the `tsconfig.josn` set the following so as to use import and export**

```json
{
  "module": "es2015",
  "target": "es6"
}
```

```html
<!-- In Links -->
<script type="module" src="./dist/app.js"></script>
```

## Interfaces in Ts

```ts
/**
 * You can use an interface to create a structure for a class or an object
 */
interface Student {
  name: string;
  gpa: number;
  course: string;
  classes: string[];
  identify: () => void;
}

// Then implement the interface in a class
class _HavardStudent implements Student {
  private name: string;
  private gpa: number;
  private course: string;
  private classes: string[];
  identify: () => void;

  constructor(name: string, gpa: number, course: string, classes: string[]) {
    this.name = name;
    this.gpa = gpa;
    this.course = course;
    this.classes = classes;
    this.identify = function () {
      console.log(this);
    };
  }
}

const mStudent = new _HavardStudent("Henry", 4.3, "Software Engeneering", [
  "Mathematics",
  "Computer Science",
]);

mStudnet.identify();

/**
 * Using an interface for objects
 */

const mStudent:Student = {
  name: "Henry",
  gpa: 4.3,
  course: "Software Engeneering",
  classes: ["Mathematics", "Computer Science"],
  identify: function () {
    console.log(this);
  },
};
```
